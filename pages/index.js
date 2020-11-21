import Head from 'next/head';
import { Header, Hero, PageTitle } from '../components';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Header />
      <Hero />
      <main>
        <PageTitle />
      </main>
    </div>
  );
};

export default Index;
