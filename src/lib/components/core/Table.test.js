import React from 'react';
import { shallow } from 'enzyme';
import { Table } from "./Table";

describe('Table', () => {
  it('Table matches snapshot', () => {
    const component = shallow(<Table></Table>);
    expect(component).toMatchSnapshot();
  })
});
