import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import ProductWrapper from '../styles/Product.styles';

const Product = ({ data }) => {
  return (
    <ProductWrapper>
      <img
        src={data.assets[0].url}
        className="lazyload"
        width="168px"
        height="126px"
        alt={data.title + ' ' + 'Product Photo'}
      />
      <h2>{data.title}</h2>
      <h3>{'$' + data.unitPrice}</h3>
    </ProductWrapper>
  );
};

export default Product;
