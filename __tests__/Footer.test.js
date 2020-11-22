import React from 'react';
import { shallow } from 'enzyme';
import { Footer, SocialBar } from '../components';

describe('Components', () => {
  describe('Footer', () => {
    const wrapper = shallow(<Footer />);
    it('should render without error', () => {
      expect(wrapper).toBeTruthy();
    });
    it('should contain a Social Media Icons Bar', () => {
      expect(wrapper.containsMatchingElement(<SocialBar />)).toBeTruthy();
    });
    it('should contain 2 Links in the Footer Menu', () => {
      expect(
        wrapper.containsMatchingElement(
          <div>
            <a>Terms of Service</a>
            <a>Privacy</a>
          </div>
        )
      ).toBeTruthy();
    });
  });
});
