import React from 'react';
import { shallow } from 'enzyme';
import { SocialBar } from '../components';
import Blog from '../public/svg/blog-icon.svg';
import Facebook from '../public/svg/facebook-icon.svg';
import Instagram from '../public/svg/instagram-icon.svg';
import Mail from '../public/svg/mail-icon.svg';
import Twitter from '../public/svg/twitter-icon.svg';
import {
  IconWrapper,
  SocialMediaIcons,
} from '../components/styles/SocialBar.styles';

describe('Common', () => {
  describe('SocialBar', () => {
    const wrapper = shallow(<SocialBar />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain a HeroImage', () => {
      expect(
        wrapper.containsMatchingElement(
          <IconWrapper>
            <SocialMediaIcons src={Blog} />
            <SocialMediaIcons src={Facebook} />
            <SocialMediaIcons src={Instagram} />
            <SocialMediaIcons src={Mail} />
            <SocialMediaIcons src={Twitter} />
          </IconWrapper>
        )
      ).toBeTruthy();
    });
  });
});
