import React from 'react';
import FooterWrapper from './styles/Footer.styles';
import SocialBar from './common/SocialBar';

function Footer() {
  return (
    <FooterWrapper>
      <SocialBar />
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
