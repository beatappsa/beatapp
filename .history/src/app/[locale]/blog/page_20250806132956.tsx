'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import type { BlogPageProps, Post, Category } from '@/types/blog';

// Mock data for demonstration
const mockCategories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology', count: 15 },
  { id: '2', name: 'Design', slug: 'design', count: 8 },
  { id: '3', name: 'Development', slug: 'development', count: 12 },
  { id: '4', name: 'AI & Machine Learning', slug: 'ai-ml', count: 6 },
];

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    slug: 'getting-started-nextjs-14',
    content: 'Learn how to build modern web applications with Next.js 14...',
    excerpt: 'A comprehensive guide to building modern web applications with the latest features of Next.js 14.',
    date: '2024-01-15',
    modified: '2024-01-15',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        altText: 'Next.js development'
      }
    },
    author: {
      node: {
        name: 'John Doe'
      }
    },
    categories: {
      nodes: [mockCategories[2]]
    },
    tags: {
      nodes: []
    }
  },
  {
    id: '2',
    title: 'Modern UI Design Principles',
    slug: 'modern-ui-design-principles',
    content: 'Explore the fundamental principles of modern UI design...',
    excerpt: 'Discover the key principles that make modern user interfaces both beautiful and functional.',
    date: '2024-01-12',
    modified: '2024-01-12',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
        altText: 'UI Design'
      }
    },
    author: {
      node: {
        name: 'Jane Smith'
      }
    },
    categories: {
      nodes: [mockCategories[1]]
    },
    tags: {
      nodes: []
    }
  },
  {
    id: '3',
    title: 'The Future of Artificial Intelligence',
    slug: 'future-of-artificial-intelligence',
    content: 'Exploring the latest trends and developments in AI...',
    excerpt: 'An in-depth look at how artificial intelligence is shaping the future of technology.',
    date: '2024-01-10',
    modified: '2024-01-10',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        altText: 'Artificial Intelligence'
      }
    },
    author: {
      node: {
        name: 'Alex Johnson'
      }
    },
    categories: {
      nodes: [mockCategories[3]]
    },
    tags: {
      nodes: []
    }
  }
];

export default function BlogPage({ params, searchParams }: BlogPageProps) {
  const t = useTranslations('blog');
  const [searchQuery, setSearchQuery] = useState(searchParams?.search || '');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(mockPosts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = mockPosts;
      
      if (searchQuery) {
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      if (selectedCategory) {
        filtered = filtered.filter(post => 
          post.categories.nodes.some(cat => cat.id === selectedCategory)
        );
      }
      
      setFilteredPosts(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={mockCategories}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogGrid 
              posts={filteredPosts}
              loading={loading}
              locale={params.locale}
            />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              categories={mockCategories}
              recentPosts={mockPosts.slice(0, 3)}
              popularPosts={mockPosts.slice().reverse().slice(0, 3)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              locale={params.locale}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Blog - Multilingual Blog Platform',
  description: 'Explore our latest articles, tutorials, and insights on web development, design, and technology.',
};