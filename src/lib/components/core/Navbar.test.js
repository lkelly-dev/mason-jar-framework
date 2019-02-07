import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, NavbarNav, NavbarBrand, NavbarText, NavbarCollapse, NavbarToggle } from "./Navbar";

describe('Navbar', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<Navbar></Navbar>);
    expect(component).toMatchSnapshot();
  })
});
