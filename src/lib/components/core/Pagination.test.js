import React from 'react';
import { shallow } from 'enzyme';
import { Pagination, PaginationItem, PaginationLink } from "./Pagination";

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
});
