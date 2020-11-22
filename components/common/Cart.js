import React from 'react';
import Basket from '../../public/svg/basket-icon.svg';
import { ShoppingCart, BasketIcon } from '../styles/Cart.styles';

const Cart = () => {
  return (
    <ShoppingCart>
      <BasketIcon src={Basket} alt="Shopping Basket Icon" />
    </ShoppingCart>
  );
};

export { Cart };
