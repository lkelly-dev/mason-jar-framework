import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from "./Loader";

describe('Loader', () => {
  it('Loader matches snapshot', () => {
    const component = shallow(<Loader></Loader>);
    expect(component).toMatchSnapshot();
  })
});
