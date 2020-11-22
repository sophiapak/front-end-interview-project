import React from 'react';
import Blog from '../../public/svg/blog-icon.svg';
import Facebook from '../../public/svg/facebook-icon.svg';
import Instagram from '../../public/svg/instagram-icon.svg';
import Mail from '../../public/svg/mail-icon.svg';
import Twitter from '../../public/svg/twitter-icon.svg';
import { IconWrapper, SocialMediaIcons } from '../styles/SocialBar.styles';

const SocialBar = () => {
  return (
    <IconWrapper>
      <SocialMediaIcons src={Blog} alt="Blog Icon" height="24px" width="24px" />
      <SocialMediaIcons
        src={Facebook}
        alt="Facebook Icon"
        height="24px"
        width="24px"
      />
      <SocialMediaIcons
        src={Instagram}
        alt="Instagram Icon"
        height="24px"
        width="24px"
      />
      <SocialMediaIcons src={Mail} alt="Mail Icon" height="24px" width="24px" />
      <SocialMediaIcons
        src={Twitter}
        alt="Twitter Icon"
        height="24px"
        width="24px"
      />
    </IconWrapper>
  );
};

export default SocialBar;
