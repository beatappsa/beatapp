import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedPosts } from '@/components/sections/FeaturedPosts';
import { RecentPosts } from '@/components/sections/RecentPosts';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import ArabicLandingPage from '@/components/pages/ArabicLandingPage';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  // Render Arabic landing page for Arabic locale
  if (params.locale === 'ar') {
    return <ArabicLandingPage />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedPosts />
      <RecentPosts />
      <NewsletterSection />
    </div>
  );
}