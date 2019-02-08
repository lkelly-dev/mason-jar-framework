import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from "./Badge";

describe('Badge', () => {
  it('matches snapshot', () => {
    const component = shallow(<Badge></Badge>);
    expect(component).toMatchSnapshot();
  })
  it('has correct props', () => {
    const component = shallow(
      <Badge color="danger" className="neato" eggman="walrus">
        <div>A</div>
      </Badge>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('badge');
    expect(classNameArray).toContain('badge-danger');
    expect(classNameArray).toContain('neato');
    expect(component.contains(<div>A</div>)).toEqual(true);
    expect(component.prop('eggman')).toBe('walrus');
  })
});
