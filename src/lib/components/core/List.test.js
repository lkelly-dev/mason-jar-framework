import React from 'react';
import { shallow } from 'enzyme';
import { List, ListItem } from "./List";

describe('List', () => {
  it('List matches snapshot', () => {
    const component = shallow(<List></List>);
    expect(component).toMatchSnapshot();
  })
});
