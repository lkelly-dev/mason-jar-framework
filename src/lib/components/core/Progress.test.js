import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from "./Progress";

describe('Progress', () => {
  it('Progress matches snapshot', () => {
    const component = shallow(<Progress now={ 0 }></Progress>);
    expect(component).toMatchSnapshot();
  });
  it('has expected props', () => {
    // FIXME this component may need refactoring
    const cn = 'neato',
          size = 'sm',
          now = 0,
          min = 0,
          max = 100;

    const component = shallow(
      <Progress
        what="ever"
        className={ cn }
        size={ size }
        now={ now }
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
