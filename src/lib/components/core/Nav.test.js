import React from 'react';
import { shallow } from 'enzyme';
import { Nav, NavTab, NavItem, NavLink, NavDropdown } from './Nav';
import { Dropdown } from './Dropdown';

describe('Nav', () => {
  it('Nav matches snapshot', () => {
    const component = shallow(<Nav></Nav>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const cn = 'neato';
    const children = <div> children </div>;
    const component = shallow(
      <Nav
        what="ever"
        className={ cn }>
        { children }
      </Nav>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('nav');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('nav')
  })
});

describe('NavTab', () => {
  it('NavTab matches snapshot', () => {
    const component = shallow(<NavTab></NavTab>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const cn = 'neato',
          overflow = 'overflow',
          size = 'sm',
          children = <div>child</div>;
    const component = shallow(
      <NavTab
        what="ever"
        size={ size }
        overflow={ overflow }
        className={ cn }>
        { children }
      </NavTab>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('nav');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toContain(`nav-tabs-${size}`);
    expect(classNameArray).toContain('nav-overflow');
    expect(classNameArray).toHaveLength(5);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('nav')
  })
});

describe('NavItem', () => {
  it('NavItem matches snapshot', () => {
    const component = shallow(<NavItem></NavItem>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const cn = 'neato';
    const children = <div> children </div>;
    const component = shallow(
      <NavItem
        what="ever"
        className={ cn }>
        { children }
      </NavItem>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('nav-item');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('div')
  })
});

describe('NavDropdown', () => {
  it('NavDropdown matches snapshot', () => {
    const component = shallow(<NavDropdown></NavDropdown>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const cn = 'neato';
    const children = <div> children </div>;
    const component = shallow(
      <NavDropdown
        what="ever"
        className={ cn }>
        { children }
      </NavDropdown>
    );
    const classNameArray = component.prop('className').split(' ');
    // FIXME should this class be nav-dropdown, or is nav-item okay?
    expect(classNameArray).toContain('nav-item');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe(Dropdown)
  })
});

describe('NavLink', () => {
  it('NavLink matches snapshot', () => {
    const component = shallow(<NavLink></NavLink>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const cn = 'neato',
          active = 'active',
          children = <div>children</div>;
    const component = shallow(
      <NavLink
        what="ever"
        active={ active }
        className={ cn }>
        { children }
      </NavLink>
    );
    const classNameArray = component.prop('className').split(' ');
    // FIXME should this class be nav-dropdown, or is nav-item okay?
    expect(classNameArray).toContain('nav-link');
    expect(classNameArray).toContain('active');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(4);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('div')
  });
  it('can have custom element', () => {
    const component = shallow(<NavLink as="i"/>);
    expect(component.type()).toBe('i');
  })
});
