import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from "./Icon";

describe('Icon', () => {
  it('Icon matches snapshot', () => {
    const component = shallow(<Icon></Icon>);
    expect(component).toMatchSnapshot();
  })
});
