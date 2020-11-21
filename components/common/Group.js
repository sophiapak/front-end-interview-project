import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .product-list {
    flex: display;
    justify-content: center;
  }

  .group-name {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 16px 16px;

    @media (min-width: 768px) {
      margin: 0 0 16px 12px;
    }
  }

  .products-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 13px 0 13px;

    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export function Group({ products }) {
  function generateProductGroups() {
    return products.map((group) => {
      if (group.products.length >= 1) {
        return (
          <div className="product-list" key={group.id}>
            <h3 className="group-name">{group.name}</h3>
            <div className="products-container">
              {group.products.map((product) => {
                return <Product className="product-item" data={product} />;
              })}
            </div>
          </div>
        );
      }
    });
  }

  return <GroupWrapper>{generateProductGroups()}</GroupWrapper>;
}
