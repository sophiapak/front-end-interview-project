import Head from 'next/head';
import styled from 'styled-components';
import { Hero, PageTitle, Group, Footer } from '../components';

const Offset = styled.div`
  height: 56px;
  width: 100%;
`;

const Index = ({ groups }) => {
  return (
    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Offset />
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
  return {
    groups: json.aisle.groups,
  };
};

export default Index;
