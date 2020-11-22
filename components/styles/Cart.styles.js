import styled from 'styled-components';

const ShoppingCart = styled.div`
  margin: 0 16px 0 0;
  display: flex;

  @media (min-width: 768px) {
    margin: 0 37px 0 0;
    width: 208.125px;
  }
`;

const BasketIcon = styled.img`
  margin: auto 0 auto auto;
`;

export { ShoppingCart, BasketIcon };
