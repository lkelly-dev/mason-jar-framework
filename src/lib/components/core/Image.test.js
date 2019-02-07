import React from 'react';
import { shallow } from 'enzyme';
import { Image } from "./Image";

describe('Image', () => {
  it('Image matches snapshot', () => {
    const component = shallow(<Image></Image>);
    expect(component).toMatchSnapshot();
  })
});
