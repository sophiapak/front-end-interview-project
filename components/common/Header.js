import React, { useState } from 'react';
import styled from 'styled-components';
import { Cart } from './Cart';
import Logo from './Logo';

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  background: #121212;
  z-index: 1;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto 16px;
  width: 16px;
  min-width: 16px;
  height: 16px;

  > div {
    height: 1px;
    background: #ffffff;
    margin: 0 0 6px 0;
    width: 100%;
  }

  @media (min-width: 776px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 56px;
  left: 0;
  padding: 8px;
  color: #ffffff;
  background: #ffffff;

  .menu-link {
    color: #ffffff;
    text-decoration: none;
    margin: 0 42px 0 0;
  }

  @media (min-width: 776px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto 25px;
    position: relative;
    width: initial;
  }
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <a className="menu-link" href="https://foxtrotco.com/stores">
          Stores
        </a>
        <a className="menu-link" href="https://foxtrotco.com/contact">
          Contact Us
        </a>
      </Menu>
      <Logo />
      <Cart />
    </HeaderWrapper>
  );
}
