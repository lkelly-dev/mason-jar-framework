import React from 'react';
import { shallow } from 'enzyme';
import { Nav, NavTab, NavItem, NavLink, NavDropdown } from "./Nav";

describe('Nav', () => {
  it('Nav matches snapshot', () => {
    const component = shallow(<Nav></Nav>);
    expect(component).toMatchSnapshot();
  })
});
