import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedPosts } from '@/components/sections/FeaturedPosts';
import { RecentPosts } from '@/components/sections/RecentPosts';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params }: HomePageProps) {
  // Redirect Arabic users to the Arabic landing page
  if (params.locale === 'ar') {
    redirect('/ar/arabic-landing');
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