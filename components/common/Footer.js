import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const FooterWrapper = styled.footer`
  background: #121212;
  height: 146px;
  display: flex;
  flex-direction: column;

  #footer-menu {
    margin: 32px auto;
  }

  .footer-link {
    color: #ffffff;
    text-decoration: none;
    margin: 0 8px;
    font-weight: 400;
    font-size: 12px;
  }
`;

export function Footer() {
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
