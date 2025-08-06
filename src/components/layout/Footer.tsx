'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const t = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              Blog
            </motion.div>
            <p className="text-sm text-muted-foreground max-w-xs">
              A modern multilingual blog platform powered by WordPress and Next.js.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: `/${locale}` },
                { name: 'Blog', href: `/${locale}/blog` },
                { name: 'About', href: `/${locale}/about` },
                { name: 'Contact', href: `/${locale}/contact` },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="inline-block"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('followUs')}</h3>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md bg-background hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('newsletter')}</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="sm" className="w-full">
                {t('subscribe')}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>© {currentYear} Blog.</span>
            <span>{t('copyright')}</span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>using Next.js & WordPress</span>
          </p>
        </div>
      </div>
    </footer>
  );
}