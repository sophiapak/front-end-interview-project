import React from 'react';
import ProductWrapper from '../styles/Product.styles';

const Product = ({ data }) => {
  return (
    <ProductWrapper>
      <img src={data.assets[0].url} width={168} height={126} />
      <h3>{data.title}</h3>
      <h6>{'$' + data.unitPrice}</h6>
    </ProductWrapper>
  );
};

export default Product;
