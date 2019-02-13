import React from 'react';
import { shallow } from 'enzyme';
import { List, ListItem } from "../index.js";

describe('List', () => {
  it('List matches snapshot', () => {
    const component = shallow(<List></List>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const children = <div>child</div>
    const component = shallow(
      <List className={ cn } what="ever" >{ children }</List>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(children)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('list-group');
    expect(classNameArray).toContain(cn);
  });
});

describe('ListItem', () => {
  it('ListItem matches snapshot', () => {
    const component = shallow(<ListItem></ListItem>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const children = <div>child</div>
    const component = shallow(
    <ListItem className={ cn } what="ever" >{ children }</ListItem>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(children)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('list-group-item');
    expect(classNameArray).toContain(cn);
  });
});
