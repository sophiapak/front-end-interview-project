import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HeroWrapper = styled(Image)`
  margin: 200px 0 -50px 0;
`;

export function Hero() {
  return <HeroWrapper src="/images/hero-image.jpg" width={375} height={179} />;
}
