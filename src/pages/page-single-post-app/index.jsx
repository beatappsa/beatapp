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
import Navbar from '@components/Navbars/AppNav';
import AllNews from '@components/Blog/AllNews';
import PopularPosts from '@components/Blog/PopularPosts';
import Footer from '@components/ITCreative/Footer';

const PageSinglePostApp = () => {
  const navbarRef = useRef(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>{t('blog.title')} - Single Post - BeatApp</title>
        <meta name="description" content="Read our latest blog post about marketing automation and business growth." />
        <meta name="keywords" content="blog post, marketing, automation, digital marketing, BeatApp" />
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-4">
          <AllNews />
          <PopularPosts />
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

export default PageSinglePostApp;