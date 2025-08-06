'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate, calculateReadingTime } from '@/lib/utils';

// Mock data - replace with actual GraphQL data
const mockRecentPosts = [
  {
    id: '4',
    title: 'Advanced React Patterns for 2024',
    excerpt: 'Explore the latest React patterns and best practices that will make your code more maintainable.',
    slug: 'advanced-react-patterns-2024',
    date: '2024-01-08',
    author: { name: 'Sarah Wilson' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      altText: 'React patterns'
    },
    categories: [{ name: 'React', slug: 'react' }],
    tags: [{ name: 'JavaScript', slug: 'javascript' }, { name: 'Frontend', slug: 'frontend' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use What',
    excerpt: 'A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.',
    slug: 'css-grid-vs-flexbox',
    date: '2024-01-05',
    author: { name: 'David Chen' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      altText: 'CSS layouts'
    },
    categories: [{ name: 'CSS', slug: 'css' }],
    tags: [{ name: 'Layout', slug: 'layout' }, { name: 'Design', slug: 'design' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '6',
    title: 'Building Accessible Web Applications',
    excerpt: 'Learn how to create web applications that are accessible to users with disabilities.',
    slug: 'building-accessible-web-applications',
    date: '2024-01-03',
    author: { name: 'Emily Rodriguez' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop',
      altText: 'Web accessibility'
    },
    categories: [{ name: 'Accessibility', slug: 'accessibility' }],
    tags: [{ name: 'UX', slug: 'ux' }, { name: 'Inclusive', slug: 'inclusive' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '7',
    title: 'TypeScript Best Practices',
    excerpt: 'Master TypeScript with these essential best practices and advanced techniques.',
    slug: 'typescript-best-practices',
    date: '2024-01-01',
    author: { name: 'Alex Thompson' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      altText: 'TypeScript code'
    },
    categories: [{ name: 'TypeScript', slug: 'typescript' }],
    tags: [{ name: 'JavaScript', slug: 'javascript' }, { name: 'Types', slug: 'types' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export function RecentPosts() {
  const t = useTranslations('blog');
  const locale = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('recent')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with our latest articles and insights
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {mockRecentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 md:h-32 overflow-hidden rounded-lg">
                  <Image
                    src={post.featuredImage.sourceUrl}
                    alt={post.featuredImage.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {post.categories[0]?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-3">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{calculateReadingTime(post.content)} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center space-x-2">
                    <Tag className="h-3 w-3 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag.slug}
                          href={`/${locale}/blog/tag/${tag.slug}`}
                          className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded transition-colors"
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="pt-2">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                        Read More
                        <motion.div
                          className="ml-1"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg">
            Load More Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}