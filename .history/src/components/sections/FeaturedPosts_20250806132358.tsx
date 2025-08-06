'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate, calculateReadingTime } from '@/lib/utils';

// Mock data - replace with actual GraphQL data
const mockFeaturedPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js and WordPress',
    excerpt: 'Learn how to build a modern blog using Next.js as frontend and WordPress as headless CMS.',
    slug: 'getting-started-nextjs-wordpress',
    date: '2024-01-15',
    author: { name: 'John Doe' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      altText: 'Next.js and WordPress'
    },
    categories: [{ name: 'Development', slug: 'development' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: '2',
    title: 'Building Multilingual Websites',
    excerpt: 'Discover best practices for creating websites that support multiple languages and cultures.',
    slug: 'building-multilingual-websites',
    date: '2024-01-12',
    author: { name: 'Jane Smith' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
      altText: 'Multilingual websites'
    },
    categories: [{ name: 'Design', slug: 'design' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '3',
    title: 'Modern Animation Techniques',
    excerpt: 'Explore the latest animation libraries and techniques for creating engaging user experiences.',
    slug: 'modern-animation-techniques',
    date: '2024-01-10',
    author: { name: 'Mike Johnson' },
    featuredImage: {
      sourceUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
      altText: 'Animation techniques'
    },
    categories: [{ name: 'Animation', slug: 'animation' }],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export function FeaturedPosts() {
  const t = useTranslations('blog');
  const locale = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('featured')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and trending articles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mockFeaturedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-background rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.featuredImage.sourceUrl}
                  alt={post.featuredImage.altText}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.categories[0]?.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
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
                    <span>{calculateReadingTime(post.content)} min</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
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
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href={`/${locale}/blog`}>
            <Button size="lg" variant="outline">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}