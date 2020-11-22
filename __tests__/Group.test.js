import React from 'react';
import { shallow } from 'enzyme';
import { Group } from '../components';

describe('Components', () => {
  describe('Group', () => {
    const products = [
      {
        id: 1234,
        name: 'wine',
        products: [
          {
            id: 4321,
            title: 'Merlo',
            unitPrice: 35,
            assets: [
              {
                url: 'https://google.com',
              },
            ],
          },
        ],
      },
    ];
    const wrapper = shallow(<Group products={products} />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
  });
});
