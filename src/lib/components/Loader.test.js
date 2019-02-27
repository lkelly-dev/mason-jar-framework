import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from "../index.js";

describe('Loader', () => {
  it('Loader matches snapshot', () => {
    const component = shallow(<Loader></Loader>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(
      <Loader
        size={ size }
        color={ color }
        className={ cn }
        what="ever" />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toContain('loader');
    expect(classNameArray).toContain(`loader-${size}`);
    expect(classNameArray).toContain(`loader-${color}`);
    expect(classNameArray).toHaveLength(4);
    expect(component.prop('what')).toBe('ever');
  });

  it('doesnt include invalid props', () => {
    const component = shallow(
      <Loader size={ badSize } color={ badColor } />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('loader');
    expect(classNameArray).not.toContain(`loader-${badSize}`);
    expect(classNameArray).not.toContain(`loader-${badColor}`);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <Loader
        context={ Context }
        size={ size }
        color={ color }
        className={ cn }
        what="ever">
        { child }
      </Loader>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-size')).toBe(size);
    expect(component.prop('data-color')).toBe(color);
    expect(component.prop('data-className')).toBe(cn);
  })
});
