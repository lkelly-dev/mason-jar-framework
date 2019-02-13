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
});
