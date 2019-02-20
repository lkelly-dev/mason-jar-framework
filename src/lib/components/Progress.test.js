import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from "../index.js";

describe('Progress', () => {
  it('Progress matches snapshot', () => {
    const component = shallow(<Progress currentValue={ 0 }></Progress>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const currentValue = 0,
          min = 0,
          max = 100;

    const component = shallow(
      <Progress
        what="ever"
        className={ cn }
        size={ size }
        currentValue={ currentValue }
        min={ min }
        max={ max }>
      </Progress>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toContain(`progress-${size}`);
    expect(component.prop('what')).toBe('ever');
    const child = component.find('div.progress-bar');
    expect(child.prop('className')).toBe('progress-bar');
    expect(child.prop('role')).toBe('progressbar');
    expect(child.prop('aria-valuenow')).toBe(0);
    expect(child.prop('aria-valuemin')).toBe(0);
    expect(child.prop('aria-valuemax')).toBe(100);
  });

  it('appends data-attributes in debugMode', () => {
    const currentValue = 0,
          min = 0,
          max = 100;
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <Progress
        context={ Context }
        className={ cn }
        currentValue={ currentValue }
        min={ min }
        max={ max }
        what="ever">
        { child }
      </Progress>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-currentValue')).toBe(currentValue);
    expect(component.prop('data-min')).toBe(min);
    expect(component.prop('data-max')).toBe(max);
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});
