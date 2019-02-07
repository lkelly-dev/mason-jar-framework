import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardHeader, CardBody, CardText, CardTitle, CardDropdown, CardAvatar, CardTable } from "./Card";

describe('Card', () => {
  it('Card matches snapshot', () => {
    const component = shallow(<Card></Card>);
    expect(component).toMatchSnapshot();
  })
});
