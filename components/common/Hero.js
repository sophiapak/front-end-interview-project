import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  margin: 56px 0 0 0;

  @media (min-width: 768px) {
    margin: 56px 0 0 10px;
  }
`;

const PageTitleWrapper = styled.div`
  margin: 0 16px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  > h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    margin: 20px 0 0 0;
  }

  > p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 48px 0;
  }
`;

export function Hero() {
  return (
    <HeroWrapper>
      <Image src="/images/hero-image.jpg" width={375} height={179} />;
      <PageTitleWrapper>
        <h1>Discover Aisle</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </PageTitleWrapper>
    </HeroWrapper>
  );
}
