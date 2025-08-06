import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { BlogPageProps } from '@/types/blog';

export default function BlogPage({ params, searchParams }: BlogPageProps) {
  const t = useTranslations('blog');

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<LoadingSpinner />}>
              <BlogGrid 
                locale={params.locale}
                searchQuery={searchParams?.search}
                currentPage={parseInt(searchParams?.page || '1')}
              />
            </Suspense>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <BlogSidebar locale={params.locale} />
            </Suspense>
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