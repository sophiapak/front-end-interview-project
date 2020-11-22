import React from 'react';
import { shallow } from 'enzyme';
import { Product } from '../components';

describe('Common', () => {
  describe('Product', () => {
    const data = {
      id: 4321,
      title: 'Merlo',
      unitPrice: 35,
      assets: [
        {
          url: 'https://google.com',
        },
      ],
    };
    const wrapper = shallow(<Product data={data} />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
  });
});
