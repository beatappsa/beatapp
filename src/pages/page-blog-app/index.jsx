import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import BlogTopNav from '@components/Navbars/BlogTopNav';
import Navbar from '@components/Navbars/AppNav';
import BlogSlider from '@components/Blog/BlogSlider';
import PopularPosts from '@components/Blog/PopularPosts';
import AllNews from '@components/Blog/AllNews';
import Footer from '@components/ITCreative/Footer';

const PageBlogApp = () => {
  const navbarRef = useRef(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>{t('blog.title')} - BeatApp</title>
        <meta name="description" content={t('blog.meta_description')} />
        <meta name="keywords" content={t('blog.meta_keywords')} />
      </Head>

      <MainLayout>
        <BlogTopNav style="7" />
        <Navbar navbarRef={navbarRef} />
        <main className="blog-page style-5 color-4">
          <BlogSlider />
          <PopularPosts />
          <AllNews />
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

export default PageBlogApp;