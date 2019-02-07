import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

describe('Breadcrumb', () => {
  it('Breadcrumb matches snapshot', () => {
    const component = shallow(<Breadcrumb></Breadcrumb>);
    expect(component).toMatchSnapshot();
  })
});
