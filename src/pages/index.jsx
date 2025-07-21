import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav-7';
import SideMenu from '@components/ITCreative/SideMenu';
import Navbar from '@components/Navbars/ITCreativeNav';
import Header from '@components/ITCreative/Header';
import Features from '@components/ITCreative/Features';
import About from '@components/ITCreative/About';
import Services from '@components/ITCreative/Services';
import HowWeWork from '@components/ITCreative/HowWeWork';
import SystemFeatures from '@components/ITCreative/SystemFeatures';
import PricingPackages from '@components/ITCreative/PricingPackages';
import TargetAudience from '@components/ITCreative/TargetAudience';
import WhyDifferent from '@components/ITCreative/WhyDifferent';
import UserExperiences from '@components/ITCreative/UserExperiences';
import CallToAction from '@components/ITCreative/CallToAction';
import MainFormSection from '@components/ITCreative/MainFormSection';
import Footer from '@components/ITCreative/Footer';

const HomePage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  return (
    <>
      <Head>
        <title>{t('header.brand_name')} - {isRTL ? 'أتمتة التسويق الذكية' : 'Smart Marketing Automation'}</title>
        <meta name="description" content={isRTL ? 'BeatApp - نظام تسويق متكامل يعمل نيابة عنك. جذب العملاء، متابعة تلقائية، وتحويل ذكي.' : 'BeatApp - Complete marketing system that works for you. Attract customers, automatic follow-up, and smart conversion.'} />
        <meta name="keywords" content={isRTL ? 'تسويق، أتمتة، واتساب، إيميل، تحويل، عملاء، funnel، CRM' : 'marketing, automation, whatsapp, email, conversion, customers, funnel, CRM'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${t('header.brand_name')} - ${isRTL ? 'أتمتة التسويق الذكية' : 'Smart Marketing Automation'}`} />
        <meta property="og:description" content={isRTL ? 'نظام تسويق متكامل يعمل نيابة عنك. جذب العملاء، متابعة تلقائية، وتحويل ذكي.' : 'Complete marketing system that works for you. Attract customers, automatic follow-up, and smart conversion.'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://beatapp.io" />
      </Head>

      <MainLayout isRTL={isRTL}>
        <TopNav rtl={isRTL} />
        <SideMenu rtl={isRTL} />
        <Navbar rtl={isRTL} />
        <Header rtl={isRTL} />
        <main>
          <Features rtl={isRTL} />
          <About rtl={isRTL} />
          <Services rtl={isRTL} />
          <HowWeWork rtl={isRTL} />
          <SystemFeatures rtl={isRTL} />
          <PricingPackages rtl={isRTL} />
          <TargetAudience rtl={isRTL} />
          <WhyDifferent rtl={isRTL} />
          <UserExperiences rtl={isRTL} />
          <CallToAction rtl={isRTL} />
        </main>
        <MainFormSection rtl={isRTL} />
        <Footer rtl={isRTL} />
      </MainLayout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ar', [
        'common',
      ])),
    },
  }
}

export default HomePage;