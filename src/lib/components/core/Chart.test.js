import React from 'react';
import { shallow } from 'enzyme';
import { Chart, ChartCanvas } from "./Chart";

describe('Chart', () => {
  it('Chart matches snapshot', () => {
    const component = shallow(<Chart></Chart>);
    expect(component).toMatchSnapshot();
  })
});
