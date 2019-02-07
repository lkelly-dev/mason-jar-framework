import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from "./Progress";

describe('Progress', () => {
  it('Progress matches snapshot', () => {
    const component = shallow(<Progress></Progress>);
    expect(component).toMatchSnapshot();
  })
});
