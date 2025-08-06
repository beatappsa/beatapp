'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { formatDate, calculateReadingTime, truncateText } from '@/lib/utils';
import { Post } from '@/types/blog';
import { Button } from '@/components/ui/button';

interface BlogGridProps {
  posts: Post[];
  loading?: boolean;
  locale: string;
}

export default function BlogGrid({ posts, loading = false, locale }: BlogGridProps) {
  const t = useTranslations('blog');

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {t('noPosts')}
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          {t('noPostsDescription')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
          {/* Featured Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.featuredImage?.node.sourceUrl || '/images/placeholder-blog.jpg'}
              alt={post.featuredImage?.node.altText || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {post.categories && post.categories.nodes.length > 0 && (
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.categories.nodes[0].name}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{calculateReadingTime(post.content)} {t('minRead')}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
              <Link href={`/${locale}/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {truncateText(post.excerpt, 120)}
            </p>

            {/* Author and Read More */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm text-gray-600">
                  {post.author?.node.name || t('anonymous')}
                </span>
              </div>
              
              <Link href={`/${locale}/blog/${post.slug}`}>
                <Button variant="ghost" size="sm" className="group/btn">
                  {t('readMore')}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}