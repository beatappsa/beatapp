import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import AbsoluteContainer from '@components/Navbars/AbsoluteContainer';
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import NotFound from '@components/404';;

const Page404 = () => {
  const navbarRef = useRef(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>{t('error.404_title')} - BeatApp</title>
        <meta name="description" content={t('error.404_message')} />
        <meta name="keywords" content="404, page not found, error, BeatApp" />
      </Head>

      <MainLayout>
        <AbsoluteContainer>
          <TopNav style="5" />
          <Navbar navbarRef={navbarRef} />
        </AbsoluteContainer>
        <main className="erorr-404-page style-5">
          <NotFound />
        </main>
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

export default Page404;