import Head from 'next/head';
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
import SimpleFooter from '@components/ITCreative/SimpleFooter';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>BeatApp - أتمتة التسويق الذكية</title>
        <meta name="description" content="BeatApp - نظام تسويق متكامل يعمل نيابة عنك. جذب العملاء، متابعة تلقائية، وتحويل ذكي." />
        <meta name="keywords" content="تسويق، أتمتة، واتساب، إيميل، تحويل، عملاء، funnel، CRM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="BeatApp - أتمتة التسويق الذكية" />
        <meta property="og:description" content="نظام تسويق متكامل يعمل نيابة عنك. جذب العملاء، متابعة تلقائية، وتحويل ذكي." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://beatapp.io" />
      </Head>

      <MainLayout isRTL>
        <TopNav rtl />
        <SideMenu rtl />
        <Navbar rtl />
        <Header rtl />
        <main>
          <Features rtl />
          <About rtl />
          <Services rtl />
          <HowWeWork rtl />
          <SystemFeatures rtl />
          <PricingPackages rtl />
          <TargetAudience rtl />
          <WhyDifferent rtl />
          <UserExperiences rtl />
          <CallToAction rtl />
        </main>
        <SimpleFooter rtl />
      </MainLayout>
    </>
  )
}

export default HomePage;