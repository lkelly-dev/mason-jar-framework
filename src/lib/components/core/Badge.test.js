import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from "./Badge";

describe('Badge', () => {
  it('matches snapshot', () => {
    const component = shallow(<Badge></Badge>);
    expect(component).toMatchSnapshot();
  })
  it('has correct props', () => {
    const component = shallow(<Badge color="danger" className="neato" eggman="walrus">A</Badge>);
    expect(component.prop("className")).toBe("badge badge-danger neato");
    expect(component.prop('children')).toBe('A');
    expect(component.prop('eggman')).toBe('walrus');
  })
});
