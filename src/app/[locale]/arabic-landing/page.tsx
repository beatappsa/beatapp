import ArabicLandingPage from '@/components/pages/ArabicLandingPage';

export default function ArabicLandingPageRoute() {
  return <ArabicLandingPage />;
}

export function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' }
  ];
}