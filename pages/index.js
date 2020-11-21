import Head from 'next/head';
import { Hero, PageTitle, Group, Footer } from '../components';

const Index = ({ groups }) => {
  console.log('INDEX > GROUPS: ', groups);
  return (
    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Hero />
      <PageTitle />
      <Group products={groups} />
      <Footer />
    </div>
  );
};

// TARGETS GROUPS (an array of objects)
// object.aisle.groups => objects[]

// TARGETS PRODUCTS FROM EACH GROUP (an array of objects)
// groups[i].products

Index.getInitialProps = async () => {
  const data = await fetch(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6'
  );
  const json = await data.json();
  // console.log('INDEX.GETINITIALPROPS > JSON: ', json.aisle.groups);
  return {
    groups: json.aisle.groups,
  };
};

export default Index;
