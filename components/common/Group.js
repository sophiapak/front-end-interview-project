import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const GroupWrapper = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;

  .group-name {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 16px 0;
  }

  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export function Group({ products }) {
  function generateProductGroups() {
    return products.map((group) => {
      if (group.products.length >= 1) {
        return (
          <div key={group.id}>
            <h3 className="group-name">{group.name}</h3>
            <div className="products-container">
              {group.products.map((product) => {
                return <Product data={product} />;
              })}
            </div>
          </div>
        );
      }
    });
  }

  return <GroupWrapper>{generateProductGroups()}</GroupWrapper>;
}
