'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Category } from '@/types/blog';

interface BlogHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Category[];
}

export default function BlogHeader({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}: BlogHeaderProps) {
  const t = useTranslations('blog');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none min-w-[200px]"
              >
                <option value="" className="text-gray-900">
                  {t('allCategories')}
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="text-gray-900">
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange('')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              {t('allPosts')}
            </Button>
            {categories.slice(0, 4).map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}