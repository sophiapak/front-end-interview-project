import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../components';
import Foxtrot from '../public/svg/foxtrot-logo-black.svg';

describe('Common', () => {
  describe('Logo', () => {
    const wrapper = shallow(<Logo />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain an Img', () => {
      expect(
        wrapper.containsMatchingElement(<img src={Foxtrot} />)
      ).toBeTruthy();
    });
  });
});
