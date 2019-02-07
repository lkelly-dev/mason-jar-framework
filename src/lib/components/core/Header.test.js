import React from 'react';
import { shallow } from 'enzyme';
import {Header, HeaderBody, HeaderPretitle, HeaderSubtitle, HeaderTitle } from "./Header";

describe('Header', () => {
  it('Header matches snapshot', () => {
    const component = shallow(<Header></Header>);
    expect(component).toMatchSnapshot();
  })
});
