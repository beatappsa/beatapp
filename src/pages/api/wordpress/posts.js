export default async function handler(req, res) {
  const { method, query } = req;
  
  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Build the WordPress API URL with query parameters
    const baseUrl = 'http://amin.local/wp-json/wp/v2/posts';
    const params = new URLSearchParams();
    
    // Add common parameters
    params.append('_embed', 'true');
    
    // Try different language filtering approaches
    if (query.lang) {
      // Method 1: Standard Polylang lang parameter
      params.append('lang', query.lang);
      
      // Method 2: Try language taxonomy (Polylang creates 'language' taxonomy)
      // This might work better with free Polylang
      if (query.lang === 'ar') {
        params.append('language', 'ar'); // or specific term ID
      } else if (query.lang === 'en') {
        params.append('language', 'en'); // or specific term ID  
      }
    }
    
    // Add query parameters from the request
    if (query.per_page) params.append('per_page', query.per_page);
    if (query.page) params.append('page', query.page);
    if (query.tags) params.append('tags', query.tags);
    if (query.orderby) params.append('orderby', query.orderby);
    if (query.order) params.append('order', query.order);
    if (query.search) params.append('search', query.search);
    if (query.categories) params.append('categories', query.categories);
    
    const wpApiUrl = `${baseUrl}?${params.toString()}`;
    
    // Fetch from WordPress API
    const response = await fetch(wpApiUrl);
    
    if (!response.ok) {
      console.error('WordPress API error:', response.status, response.statusText);
      return res.status(response.status).json({ 
        error: 'WordPress API error',
        status: response.status,
        statusText: response.statusText
      });
    }
    
    let data = await response.json();
    
    // If WordPress API didn't filter by language, do client-side filtering as fallback
    if (query.lang && data.length > 0) {
      // Check if we need client-side filtering based on post titles or content
      const hasLanguageVariation = data.some(post => {
        const title = post.title.rendered.toLowerCase();
        const content = (post.content.rendered || '').toLowerCase();
        
        // Simple heuristic: Arabic posts likely contain Arabic characters
        const hasArabic = /[\u0600-\u06FF]/.test(title + content);
        // English posts likely contain English words and no Arabic
        const hasEnglish = /[a-zA-Z]/.test(title) && !/[\u0600-\u06FF]/.test(title);
        
        return hasArabic || hasEnglish;
      });
      
      // Always apply client-side filtering if a language is specified
      data = data.filter(post => {
        const title = post.title.rendered;
        const content = post.content.rendered || '';
        const combined = title + ' ' + content;
        
        if (query.lang === 'ar') {
          // For Arabic: include posts with Arabic characters (exclude test articles)
          const hasArabicChars = /[\u0600-\u06FF]/.test(combined);
          return hasArabicChars;
        } else if (query.lang === 'en') {
          // For English: include "test article" posts and posts with English but no Arabic
          const isTestArticle = title.toLowerCase().includes('test article');
          const hasEnglishChars = /[a-zA-Z]/.test(title);
          const hasArabicChars = /[\u0600-\u06FF]/.test(combined);
          return isTestArticle || (hasEnglishChars && !hasArabicChars);
        }
        
        return true; // Default: return all if no specific language requested
      });
    }
    
    // Get pagination info from headers
    const totalPosts = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');
    
    // Process posts for language-specific content
    const processedPosts = data.map(post => {
      const currentLang = query.lang || 'ar';
      
      return {
        ...post,
        language: currentLang,
        title: {
          ...post.title,
          rendered: post.title.rendered || post.title
        },
        excerpt: {
          ...post.excerpt,
          rendered: post.excerpt.rendered || post.excerpt
        },
        content: {
          ...post.content,
          rendered: post.content.rendered || post.content
        }
      };
    });
    
    // Return data with pagination info and language metadata
    res.status(200).json({
      posts: processedPosts,
      language: query.lang || 'ar',
      pagination: {
        total: processedPosts.length, // Use filtered count
        totalPages: Math.ceil(processedPosts.length / (query.per_page || 10)),
        currentPage: query.page ? parseInt(query.page) : 1,
        perPage: query.per_page ? parseInt(query.per_page) : 10
      }
    });
    
  } catch (error) {
    console.error('API proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch from WordPress API',
      message: error.message 
    });
  }
} 