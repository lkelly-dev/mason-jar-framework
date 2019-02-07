import React from 'react';
import { shallow } from 'enzyme';
import { Alert, AlertLink, AlertHeading } from "./Alert";

describe('Alert', () => {
  it('Alert matches snapshot', () => {
    const component = shallow(<Alert />);
    expect(component).toMatchSnapshot();
  })
});
