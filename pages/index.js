import Head from 'next/head';
import { Header, Hero, Group, Footer, Main } from '../components';

const Index = ({ groups }) => {
  return (
    <>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Header />
      <Main>
        <Hero />
        <Group products={groups} />
      </Main>
      <Footer />
    </>
  );
};

Index.getInitialProps = async () => {
  const data = await fetch(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6'
  );
  const json = await data.json();
  return {
    groups: json.aisle.groups,
  };
};

export default Index;
