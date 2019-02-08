import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from "./Loader";

describe('Loader', () => {
  it('Loader matches snapshot', () => {
    const component = shallow(<Loader></Loader>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const size = 'sm';
    const color = 'primary'
    const component = shallow(
      <Loader
        size={ size }
        color={ color }
        className="nifty"
        what="ever" />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toContain('loader');
    expect(classNameArray).toContain(`loader-${size}`);
    expect(classNameArray).toContain(`loader-${color}`);
    expect(classNameArray).toHaveLength(4);
    expect(component.prop('what')).toBe('ever');
  });
});
