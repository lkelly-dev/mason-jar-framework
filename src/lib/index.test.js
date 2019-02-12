import React from 'react';
import * as MasonJar from './index.js';
import { shallow } from 'enzyme';

const { Alert } = MasonJar;

describe('core index file', () => {
  it('can import from Alert', () => {
    const component = shallow(<Alert />)
    expect(component).toMatchSnapshot;
  })
});

