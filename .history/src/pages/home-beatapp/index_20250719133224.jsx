import Head from 'next/head';
import MainLayout from '@layouts/Main';
import Header from '@components/BeatApp/Header';
import Features from '@components/BeatApp/Features';

const HomeBeatApp = () => {
  return (
    <MainLayout>
      <Header rtl={true} />
      <Features rtl={true} />
    </MainLayout>
  )
}

export default HomeBeatApp;