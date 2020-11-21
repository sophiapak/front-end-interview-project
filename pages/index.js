import Head from 'next/head';
import styled from 'styled-components';
import { Header, Hero, Group, Footer } from '../components';

const Main = styled.main`
  margin: 56px 0 0 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 950px;
    margin: 0 auto;
  }
`;

const Index = ({ groups }) => {
  return (
    <div>
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
