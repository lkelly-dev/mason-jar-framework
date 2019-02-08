import React from 'react';
import { shallow } from 'enzyme';
import { Chart, ChartCanvas } from "./Chart";

describe('Chart', () => {
  it('Chart matches snapshot', () => {
    const component = shallow(<Chart></Chart>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <Chart
        className="nifty"
        what="ever" >
        { childComponent }
      </Chart>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('chart');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('ChartCanvas', () => {
  it('ChartCanvas matches snapshot', () => {
    const component = shallow(<ChartCanvas></ChartCanvas>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <ChartCanvas
        className="nifty"
        what="ever" >
        { childComponent }
      </ChartCanvas>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.type()).toBe('canvas');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('chart-canvas');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(2);
  });
});
