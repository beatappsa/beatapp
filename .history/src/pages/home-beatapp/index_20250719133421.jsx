import Head from 'next/head';
import MainLayout from '@layouts/Main';
import Header from '@components/BeatApp/Header';
import Features from '@components/BeatApp/Features';
import About from '@components/BeatApp/About';

const HomeBeatApp = () => {
  return (
    <MainLayout>
      <Header rtl={true} />
      <Features rtl={true} />
      <About rtl={true} />
    </MainLayout>
  )
}

export default HomeBeatApp;