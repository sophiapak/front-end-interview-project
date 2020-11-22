import React from 'react';
import { shallow } from 'enzyme';
import Index from '../pages/index';
import { Header, Hero, Group, Footer, Main } from '../components';

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
    it('should contain a Header', () => {
      expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
    });
    it('should contain a Hero', () => {
      expect(wrapper.containsMatchingElement(<Hero />)).toBeTruthy();
    });
    it('should contain a Footer', () => {
      expect(wrapper.containsMatchingElement(<Footer />)).toBeTruthy();
    });
  });
});
