import React from 'react';
import LogoWrapper from '../styles/Logo.styles';
import Foxtrot from '../../public/svg/foxtrot-logo-black.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <img
        src={Foxtrot}
        alt="Foxtrot Logo Black"
        height="17.33px"
        width="129.27px"
      />
    </LogoWrapper>
  );
};

export default Logo;
