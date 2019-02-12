import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from "./Badge";

describe('Badge', () => {
  it('matches snapshot', () => {
    const component = shallow(<Badge></Badge>);
    expect(component).toMatchSnapshot();
  })
  it('has correct props', () => {
    const child = <div>A</div>;
    const component = shallow(
      <Badge
        color={ color }
        className={ cn }
        eggman="walrus">
        { child }
      </Badge>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('badge');
    expect(classNameArray).toContain(`badge-${color}`);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('eggman')).toBe('walrus');
  });

  it('doesnt use incorrect props', () => {
    const component = shallow(<Badge color={ badColor }/>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('badge');
    expect(classNameArray).not.toContain(`badge-${badColor}`);
    expect(classNameArray).toHaveLength(1)
  });
});
