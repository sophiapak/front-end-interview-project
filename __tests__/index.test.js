import React from 'react';
import { shallow } from 'enzyme';
import Index from '../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    const wrapper = shallow(<Index />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain a Head', () => {
      expect(wrapper.find('Head').length).toBe(1);
    });
    it('should contain a Title with Foxtrot', () => {
      expect(wrapper.find('title').text()).toEqual('Foxtrot');
    });
  });
});
