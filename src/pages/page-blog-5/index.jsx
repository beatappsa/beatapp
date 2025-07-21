import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import BlogSlider from '@components/Blog/BlogSlider';
import PopularPosts from '@components/Blog/PopularPosts';
import AllNews from '@components/Blog/AllNews';
import Footer from '@components/ITCreative/Footer';

const PageBlog5 = () => {
  const navbarRef = useRef(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>{t('blog.title')} 5 - BeatApp</title>
        <meta name="description" content="BeatApp Blog - Latest insights on marketing automation, digital marketing, and business growth." />
        <meta name="keywords" content="blog, marketing, automation, digital marketing, business growth, BeatApp" />
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-5">
          <BlogSlider style="5" />
          <PopularPosts style="5" />
          <AllNews style="5" />
        </main>
        <Footer noWave />
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

export default PageBlog5;