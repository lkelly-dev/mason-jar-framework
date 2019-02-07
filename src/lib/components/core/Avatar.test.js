import React from 'react';
import { shallow } from 'enzyme';
import { Avatar, AvatarImage, AvatarTitle } from "./Avatar";

describe('Avatar', () => {
  it('Avatar matches snapshot', () => {
    const component = shallow(<Avatar />);
    expect(component).toMatchSnapshot();
  })
});
