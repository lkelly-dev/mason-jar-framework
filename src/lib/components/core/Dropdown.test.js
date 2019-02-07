import React from 'react';
import { shallow } from 'enzyme';
import {
  Dropdown,
  DropdownToggle,
  DropdownFeatherToggle,
  DropdownMenu,
  DropdownItem,
  DropdownCard,
} from "./Dropdown";

describe('Dropdown', () => {
  it('Dropdown matches snapshot', () => {
    const component = shallow(<Dropdown></Dropdown>);
    expect(component).toMatchSnapshot();
  })
});
