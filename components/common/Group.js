import React from 'react';
import styled from 'styled-components';

const GroupWrapper = styled.div`
  margin: 0 16px;

  > h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
`;

export function Group({ products }) {
  function generateProductGroups() {
    console.log(products);
    return products.map((group) => {
      console.log(group.name);
      return (
        <div key={group.id}>
          <h3>{group.name}</h3>
          {group.products.map((product) => {
            return <h6>{product.title}</h6>;
          })}
        </div>
      );
    });
  }

  return <GroupWrapper>{generateProductGroups()}</GroupWrapper>;
}
