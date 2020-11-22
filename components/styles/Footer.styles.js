import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #121212;
  height: 146px;
  display: flex;
  flex-direction: column;
  width: 100%;

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

export default FooterWrapper;
