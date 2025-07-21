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
import Projects from '@components/ITCreative/Projects';
import Testimonials from '@components/ITCreative/Testimonials';
import ChooseUs from '@components/ITCreative/ChooseUs';
import Blog from '@components/ITCreative/Blog';
import ChatBanner from '@components/ITCreative/ChatBanner';
import SimpleFooter from '@components/ITCreative/SimpleFooter';

const RTLHomeItSolutions2 = () => {
  return (
    <>
      <Head>
        <title>BeatApp - أتمتة التسويق الذكية</title>
        <meta name="description" content="BeatApp - نظام تسويق متكامل يعمل نيابة عنك. جذب العملاء، متابعة تلقائية، وتحويل ذكي." />
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
          <Projects rtl />
          <Testimonials rtl />
          <ChooseUs rtl />
          <Blog rtl />
          <ChatBanner rtl />
        </main>
        <SimpleFooter rtl />
      </MainLayout>
    </>
  )
}

export default RTLHomeItSolutions2; 