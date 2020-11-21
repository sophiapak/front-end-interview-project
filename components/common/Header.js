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

  @media (min-width: 376px) {
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

  @media (min-width: 376px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    position: relative;
    width: initial;
  }
`;

const ShoppingCart = styled(Cart)`
  margin: auto 16px auto 0;
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
        <a href="https://foxtrotco.com/stores">Stores</a>
        <a href="https://foxtrotco.com/contact">Contact Us</a>
      </Menu>
      <Logo />
      <ShoppingCart />
    </HeaderWrapper>
  );
}
