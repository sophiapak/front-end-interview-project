import Head from 'next/head';
import { Header, Hero, Group, Footer, Main } from '../components';

export default function Index({ groups }) {
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
}

export async function getStaticProps() {
  const data = await fetch(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6'
  );
  const json = await data.json();
  return {
    props: { groups: json.aisle.groups },
  };
}
