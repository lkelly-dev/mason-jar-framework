import React from 'react';
import { shallow } from 'enzyme';
import { Chart, ChartCanvas } from "../index.js";

describe('Chart', () => {
  it('Chart matches snapshot', () => {
    const component = shallow(<Chart></Chart>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child </div>;
    const component = shallow(
      <Chart
        className={ cn }
        what="ever" >
        { child }
      </Chart>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('chart');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <Chart
      context={ Context }
      className={ cn }
      what="ever">
      </Chart>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('ChartCanvas', () => {
  it('ChartCanvas matches snapshot', () => {
    const component = shallow(<ChartCanvas></ChartCanvas>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child</div>;
    const component = shallow(
      <ChartCanvas
        className={ cn }
        what="ever" >
        { child }
      </ChartCanvas>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.type()).toBe('canvas');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('chart-canvas');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <ChartCanvas
      context={ Context }
      className={ cn }
      what="ever" />
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});
