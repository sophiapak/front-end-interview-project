import React from 'react';
import { shallow } from 'enzyme';
import { Header, Cart, Logo } from '../components';
import { MobileMenuIcon, Menu } from '../components/styles/Header.styles';

describe('Components', () => {
  describe('Header', () => {
    const wrapper = shallow(<Header />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain 3 divs for the Mobile Menu', () => {
      expect(
        wrapper.containsMatchingElement(
          <MobileMenuIcon>
            <div />
            <div />
            <div />
          </MobileMenuIcon>
        )
      ).toBeTruthy();
    });
    it('should contain 2 links for the Desktop Menu', () => {
      expect(
        wrapper.containsMatchingElement(
          <Menu>
            <a>Stores</a>
            <a>Contact Us</a>
          </Menu>
        )
      ).toBeTruthy();
    });
    it('should contain the Foxtrot Logo', () => {
      expect(wrapper.containsMatchingElement(<Logo />)).toBeTruthy();
    });
    it('should contain the Basket Icon', () => {
      expect(wrapper.containsMatchingElement(<Cart />)).toBeTruthy();
    });
  });
});
