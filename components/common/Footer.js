import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #121212;
  height: 146px;

  > p {
    color: #ffffff;
  }
`;

export function Footer() {
  return (
    <FooterWrapper>
      <p>I AM THE FOOTER</p>
    </FooterWrapper>
  );
}
