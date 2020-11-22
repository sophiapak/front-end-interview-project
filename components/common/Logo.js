import React from 'react';
import LogoWrapper from '../styles/Logo.styles';
import Foxtrot from '../../public/svg/foxtrot-logo-black.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={Foxtrot} alt="Foxtrot Logo Black" />
    </LogoWrapper>
  );
};

export default Logo;
