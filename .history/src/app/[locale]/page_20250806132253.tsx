import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedPosts } from '@/components/sections/FeaturedPosts';
import { RecentPosts } from '@/components/sections/RecentPosts';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedPosts />
      <RecentPosts />
      <NewsletterSection />
    </div>
  );
}