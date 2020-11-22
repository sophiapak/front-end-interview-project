import React, { useState } from 'react';
import { Cart } from './common/Cart';
import Logo from './common/Logo';
import { HeaderWrapper, MobileMenuIcon, Menu } from './styles/Header.styles';

const Header = () => {
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
};

export default Header;
