import React from 'react';
import { shallow } from 'enzyme';
import {
  Nav,
  NavTab,
  NavItem,
  NavLink,
  NavDropdown
} from '../index.js';
import { Dropdown } from './Dropdown';

describe('Nav', () => {
  it('Nav matches snapshot', () => {
    const component = shallow(<Nav></Nav>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <Nav
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </Nav>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('NavTab', () => {
  it('NavTab matches snapshot', () => {
    const component = shallow(<NavTab></NavTab>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const overflow = 'overflow',
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = 'text',
          overflow = 'overflow';
    const component = shallow(
      <NavTab
        context={ Context }
        size={ size }
        overflow={ overflow }
        className={ cn }
        what="ever">
        { child }
      </NavTab>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-size')).toBe(size);
    expect(component.prop('data-overflow')).toBe(overflow);
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('NavItem', () => {
  it('NavItem matches snapshot', () => {
    const component = shallow(<NavItem></NavItem>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = 'text',
          overflow = 'overflow';
    const component = shallow(
      <NavItem
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </NavItem>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('NavDropdown', () => {
  it('NavDropdown matches snapshot', () => {
    const component = shallow(<NavDropdown></NavDropdown>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <NavDropdown
        what="ever"
        className={ cn }>
        { children }
      </NavDropdown>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('nav-item');
    expect(classNameArray).toContain('dropdown');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe(Dropdown)
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = 'text';
    const component = shallow(
      <NavDropdown
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </NavDropdown>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('NavLink', () => {
  it('NavLink matches snapshot', () => {
    const component = shallow(<NavLink></NavLink>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const active = 'active',
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = 'text',
          active = 'active';
    const component = shallow(
      <NavDropdown
        context={ Context }
        active={ active }
        className={ cn }
        what="ever">
        { child }
      </NavDropdown>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-active')).toBe(active);
    expect(component.prop('data-className')).toBe(cn);
  })
});
