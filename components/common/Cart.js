import React from 'react';
import styled from 'styled-components';

const ShoppingCart = styled.div`
  margin: 0 16px 0 0;
  display: flex;

  #shopping-cart {
    margin: auto 0 auto auto;
  }

  @media (min-width: 768px) {
    margin: 0 37px 0 0;
    width: 208.125px;
  }
`;

export function Cart() {
  return (
    <ShoppingCart>
      <svg
        id="shopping-cart"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.21825 7.18163C1.10473 6.56699 1.57658 6 2.20162 6H15.7984C16.4234 6 16.8953 6.56699 16.7817 7.18163L15.1194 16.1816C15.0318 16.6558 14.6183 17 14.136 17H3.86396C3.38172 17 2.96818 16.6558 2.88059 16.1816L1.21825 7.18163Z"
          stroke="white"
          strokeLinejoin="round"
        />
        <path
          d="M4.55556 3.5C4.55556 2.11929 5.67485 1 7.05556 1H10.9444C12.3252 1 13.4444 2.11929 13.4444 3.5V6H4.55556V3.5Z"
          stroke="white"
          strokeLinejoin="round"
        />
      </svg>
    </ShoppingCart>
  );
}
