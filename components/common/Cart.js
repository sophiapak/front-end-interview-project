import React from 'react';
import Basket from '../../public/svg/basket-icon.svg';
import ShoppingCart from '../styles/Cart.styles';

export function Cart() {
  return (
    <ShoppingCart>
      <img src={Basket} alt="Shopping Basket Icon" />
    </ShoppingCart>
  );
}
