import React from 'react';
import { shallow } from 'enzyme';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from "../index.js";

describe('Pagination', () => {
  it('Pagination matches snapshot', () => {
    const component = shallow(<Pagination></Pagination>);
    expect(component).toMatchSnapshot();
  });
  it('has expected props', () => {
    const children = <div>children</div>
    const component = shallow(
      <Pagination
        className={ cn }
        what="ever">
        { children }
      </Pagination>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('card')
    expect(classNameArray).toContain(cn)
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <Pagination
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </Pagination>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('PaginationItem', () => {
  it('PaginationItem matches snapshot', () => {
    const component = shallow(<PaginationItem></PaginationItem>);
    expect(component).toMatchSnapshot();
  });
  it('has expected props', () => {
    const children = <div>children</div>
    const component = shallow(
    <PaginationItem
      className={ cn }
      what="ever">
      { children }
    </PaginationItem>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('card')
    expect(classNameArray).toContain(cn)
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <PaginationItem
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </PaginationItem>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('PaginationLink', () => {
  it('PaginationLink matches snapshot', () => {
    const component = shallow(<PaginationLink></PaginationLink>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const children = <div>children</div>
    const component = shallow(
    <PaginationLink
      className={ cn }
      what="ever">
      { children }
    </PaginationLink>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('page-link')
    expect(classNameArray).toContain(cn)
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
    expect(component.type()).toBe('a')
  });
  it('overrides element type', () => {
    const component = shallow(<PaginationLink as='i'></PaginationLink>);
    expect(component.type()).toBe('i');
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <PaginationLink
        context={ Context }
        className={ cn }
        as="i"
        what="ever">
        { child }
      </PaginationLink>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-as')).toBe('i');
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});
