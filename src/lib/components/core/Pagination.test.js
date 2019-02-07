import React from 'react';
import { shallow } from 'enzyme';
import { Pagination, PaginationItem, PaginationLink } from "./Pagination";

describe('Pagination', () => {
  it('Pagination matches snapshot', () => {
    const component = shallow(<Pagination></Pagination>);
    expect(component).toMatchSnapshot();
  })
});
