import React from 'react';
import Product from './common/Product';
import GroupWrapper from './styles/Group.styles';

const Group = ({ products }) => {
  const generateProductGroups = () => {
    return products.map((group) => {
      if (group.products.length >= 1) {
        return (
          <div className="product-list" key={group.id}>
            <h3 className="group-name">{group.name}</h3>
            <div className="products-container">
              {group.products.map((product) => {
                return (
                  <Product
                    className="product-item"
                    data={product}
                    key={product.id}
                  />
                );
              })}
            </div>
          </div>
        );
      }
    });
  };

  return <GroupWrapper>{generateProductGroups()}</GroupWrapper>;
};

export default Group;
