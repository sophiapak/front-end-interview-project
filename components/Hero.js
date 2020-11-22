import React from 'react';
import { HeroWrapper, PageTitleWrapper, HeroImage } from './styles/Hero.styles';

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <HeroImage
          src={require('../public/images/hero-image.jpg')}
          alt="Discover Aisle Hero Banner"
        />
      </div>
      <PageTitleWrapper>
        <h1>Discover Aisle</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </PageTitleWrapper>
    </HeroWrapper>
  );
};

export default Hero;
