import React from 'react';
import { shallow } from 'enzyme';
import Index from '../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without crashing', () => {
      shallow(<Index />);
    });
  });
});
