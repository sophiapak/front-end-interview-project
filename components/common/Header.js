import React from 'react';
import styled from 'styled-components';
import { Cart } from './Cart';

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  background: #121212;
  z-index: 1;
`;

const MobileMenuIcon = styled.div`
  margin: auto auto auto 0;
  width: 16px;
  min-width: 16px;
  height: 16px;
  padding: 5px;

  > div {
    height: 1px;
    background: #ffffff;
    margin: 6px 0;
    width: 100%;
  }
`;

const Menu = styled.nav`
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 8px;
  color: #ffffff;
`;

const Logo = styled.h1`
  color: #ffffff;
  margin: auto auto;
  font-size: 16.85pt;
  letter-spacing: 0.3rem;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <MobileMenuIcon>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu>
        <a href="https://foxtrotco.com/stores">Stores</a>
        <a href="https://foxtrotco.com/contact">Contact Us</a>
      </Menu>
      <Logo>FOXTROT</Logo>
      <Cart />
    </HeaderWrapper>
  );
}
