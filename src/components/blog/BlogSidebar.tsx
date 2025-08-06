'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Calendar, Tag, TrendingUp, Search } from 'lucide-react';
import { Category, Post } from '@/types/blog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

interface BlogSidebarProps {
  categories: Category[];
  recentPosts: Post[];
  popularPosts: Post[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  locale: string;
}

export default function BlogSidebar({
  categories,
  recentPosts,
  popularPosts,
  searchQuery,
  onSearchChange,
  locale
}: BlogSidebarProps) {
  const t = useTranslations('blog');

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-blue-600" />
          {t('search')}
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </motion.div>

      {/* Categories Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5 text-blue-600" />
          {t('categories')}
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${locale}/blog/category/${category.slug}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {category.name}
              </span>
              {category.count && (
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-200">
                  {category.count}
                </span>
              )}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          {t('recentPosts')}
        </h3>
        <div className="space-y-4">
          {recentPosts.slice(0, 5).map((post) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  {post.featuredImage?.node.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(post.date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Popular Posts Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          {t('popularPosts')}
        </h3>
        <div className="space-y-4">
          {popularPosts.slice(0, 5).map((post, index) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(post.date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold mb-2">
          {t('newsletter.title')}
        </h3>
        <p className="text-blue-100 mb-4 text-sm">
          {t('newsletter.description')}
        </p>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder={t('newsletter.emailPlaceholder')}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
          />
          <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
            {t('newsletter.subscribe')}
          </Button>
        </div>
      </motion.div>

      {/* Tags Cloud Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {t('tags')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Design', 'Development', 'AI', 'Web', 'Mobile', 'UI/UX', 'JavaScript'].map((tag) => (
            <Link
              key={tag}
              href={`/${locale}/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}