import Head from 'next/head';
import MainLayout from '@layouts/Main';
import Header from '@components/BeatApp/Header';

const HomeBeatApp = () => {
  return (
    <>
      <Head>
        <title>BeatApp - ضاعف عملائك</title>
      </Head>

      <MainLayout isRTL>
        <Header rtl />
        <main>
          {/* More sections will be added here */}
        </main>
      </MainLayout>
    </>
  )
}

export default HomeBeatApp;