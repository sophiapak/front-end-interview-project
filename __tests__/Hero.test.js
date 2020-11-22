import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '../components';
import { HeroImage } from '../components/styles/Hero.styles';

describe('Components', () => {
  describe('Hero', () => {
    const wrapper = shallow(<Hero />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain a HeroImage', () => {
      expect(wrapper.containsMatchingElement(<HeroImage />)).toBeTruthy();
    });
    it('should contain a Hero Title', () => {
      expect(wrapper.filter('h1')).toBeTruthy();
    });
    it('should contain a Hero Caption', () => {
      expect(wrapper.filter('p')).toBeTruthy();
    });
  });
});
