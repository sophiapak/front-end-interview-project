import React from 'react';
import FooterWrapper from './styles/Footer.styles';
import SocialIcons from './common/SocialIcons';

function Footer() {
  return (
    <FooterWrapper>
      <SocialIcons />
      <div id="footer-menu">
        <a
          className="footer-link"
          href="https://foxtrotco.com/terms-of-service"
        >
          Terms of Service
        </a>
        <a className="footer-link" href="https://foxtrotco.com/privacy-policy">
          Privacy
        </a>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
