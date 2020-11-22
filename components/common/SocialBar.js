import React from 'react';
import Blog from '../../public/svg/blog-icon.svg';
import Facebook from '../../public/svg/facebook-icon.svg';
import Instagram from '../../public/svg/instagram-icon.svg';
import Mail from '../../public/svg/mail-icon.svg';
import Twitter from '../../public/svg/twitter-icon.svg';
import { IconWrapper, SocialMediaIcons } from '../styles/SocialBar.styles';

export default function SocialBar() {
  return (
    <IconWrapper>
      <SocialMediaIcons src={Blog} alt="Blog Icon" />
      <SocialMediaIcons src={Facebook} alt="Facebook Icon" />
      <SocialMediaIcons src={Instagram} alt="Instagram Icon" />
      <SocialMediaIcons src={Mail} alt="Mail Icon" />
      <SocialMediaIcons src={Twitter} alt="Twitter Icon" />
    </IconWrapper>
  );
}
