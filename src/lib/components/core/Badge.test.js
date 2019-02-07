import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from "./Badge";

describe('Badge', () => {
  it('Badge matches snapshot', () => {
    const component = shallow(<Badge></Badge>);
    expect(component).toMatchSnapshot();
  })
});
