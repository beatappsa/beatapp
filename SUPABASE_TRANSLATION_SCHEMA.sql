-- Translation Management Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Create translation tracking table
CREATE TABLE IF NOT EXISTS translation_status (
  id SERIAL PRIMARY KEY,
  wordpress_post_id INTEGER NOT NULL,
  original_language VARCHAR(10) NOT NULL DEFAULT 'ar',
  target_language VARCHAR(10) NOT NULL,
  translation_status VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending, in_progress, completed, needs_review
  original_title TEXT,
  translated_title TEXT,
  original_excerpt TEXT,
  translated_excerpt TEXT,
  translator_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure unique combination of post_id and language pair
  UNIQUE(wordpress_post_id, target_language)
);

-- Create translation quality tracking
CREATE TABLE IF NOT EXISTS translation_quality (
  id SERIAL PRIMARY KEY,
  translation_id INTEGER REFERENCES translation_status(id) ON DELETE CASCADE,
  quality_score INTEGER CHECK (quality_score >= 1 AND quality_score <= 5),
  reviewer_notes TEXT,
  reviewed_by VARCHAR(100),
  reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create translation tasks queue
CREATE TABLE IF NOT EXISTS translation_queue (
  id SERIAL PRIMARY KEY,
  wordpress_post_id INTEGER NOT NULL,
  source_language VARCHAR(10) NOT NULL,
  target_language VARCHAR(10) NOT NULL,
  priority VARCHAR(10) DEFAULT 'medium', -- low, medium, high, urgent
  assigned_to VARCHAR(100),
  deadline DATE,
  status VARCHAR(20) DEFAULT 'pending', -- pending, assigned, in_progress, completed
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_translation_status_post_lang ON translation_status(wordpress_post_id, target_language);
CREATE INDEX IF NOT EXISTS idx_translation_queue_status ON translation_queue(status);
CREATE INDEX IF NOT EXISTS idx_translation_queue_assigned ON translation_queue(assigned_to);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_translation_status_updated_at ON translation_status;
CREATE TRIGGER update_translation_status_updated_at
    BEFORE UPDATE ON translation_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_translation_queue_updated_at ON translation_queue;
CREATE TRIGGER update_translation_queue_updated_at
    BEFORE UPDATE ON translation_queue
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO translation_status (wordpress_post_id, target_language, translation_status, original_title, original_excerpt)
VALUES 
  (1, 'en', 'completed', 'مقال تجريبي', 'هذا مقال تجريبي للاختبار'),
  (2, 'ar', 'pending', 'Sample Article', 'This is a sample article for testing'),
  (3, 'en', 'needs_review', 'أخبار التقنية', 'آخر أخبار التقنية والذكاء الاصطناعي');

-- Useful queries for translation management

-- View translation progress
CREATE OR REPLACE VIEW translation_progress AS
SELECT 
  ts.wordpress_post_id,
  ts.original_language,
  ts.target_language,
  ts.translation_status,
  ts.original_title,
  ts.translated_title,
  ts.updated_at,
  tq.quality_score
FROM translation_status ts
LEFT JOIN translation_quality tq ON ts.id = tq.translation_id;

-- Function to get translation statistics
CREATE OR REPLACE FUNCTION get_translation_stats()
RETURNS TABLE (
  language VARCHAR(10),
  total_posts BIGINT,
  completed BIGINT,
  pending BIGINT,
  in_progress BIGINT,
  needs_review BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ts.target_language as language,
    COUNT(*) as total_posts,
    COUNT(*) FILTER (WHERE ts.translation_status = 'completed') as completed,
    COUNT(*) FILTER (WHERE ts.translation_status = 'pending') as pending,
    COUNT(*) FILTER (WHERE ts.translation_status = 'in_progress') as in_progress,
    COUNT(*) FILTER (WHERE ts.translation_status = 'needs_review') as needs_review
  FROM translation_status ts
  GROUP BY ts.target_language;
END;
$$ LANGUAGE plpgsql;

-- Function to add new translation task
CREATE OR REPLACE FUNCTION add_translation_task(
  p_post_id INTEGER,
  p_source_lang VARCHAR(10),
  p_target_lang VARCHAR(10),
  p_priority VARCHAR(10) DEFAULT 'medium',
  p_deadline DATE DEFAULT NULL
)
RETURNS INTEGER AS $$
DECLARE
  task_id INTEGER;
BEGIN
  -- Insert into translation_status if not exists
  INSERT INTO translation_status (wordpress_post_id, original_language, target_language)
  VALUES (p_post_id, p_source_lang, p_target_lang)
  ON CONFLICT (wordpress_post_id, target_language) DO NOTHING;
  
  -- Insert into translation_queue
  INSERT INTO translation_queue (wordpress_post_id, source_language, target_language, priority, deadline)
  VALUES (p_post_id, p_source_lang, p_target_lang, p_priority, p_deadline)
  RETURNING id INTO task_id;
  
  RETURN task_id;
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security (RLS) for multi-tenant support
ALTER TABLE translation_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE translation_quality ENABLE ROW LEVEL SECURITY;
ALTER TABLE translation_queue ENABLE ROW LEVEL SECURITY;

-- Sample RLS policies (adjust based on your auth system)
-- CREATE POLICY "Users can view their translations" ON translation_status FOR SELECT USING (true);
-- CREATE POLICY "Users can update their translations" ON translation_status FOR UPDATE USING (true);

-- Grant permissions to authenticated users
-- GRANT ALL ON translation_status TO authenticated;
-- GRANT ALL ON translation_quality TO authenticated;
-- GRANT ALL ON translation_queue TO authenticated;
-- GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated; 