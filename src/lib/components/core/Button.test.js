import React from 'react';
import { shallow } from 'enzyme';
import { Button, ButtonGroup } from "./Button";

describe('Button', () => {
  it('Button matches snapshot', () => {
    const component = shallow(<Button></Button>);
    expect(component).toMatchSnapshot();
  })
});
