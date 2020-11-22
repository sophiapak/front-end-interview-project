import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '../components';
import Basket from '../public/svg/basket-icon.svg';
import { BasketIcon } from '../components/styles/Cart.styles';

describe('Common', () => {
  describe('Cart', () => {
    const wrapper = shallow(<Cart />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain a Basket Icon', () => {
      expect(
        wrapper.containsMatchingElement(<BasketIcon src={Basket} />)
      ).toBeTruthy();
    });
  });
});
