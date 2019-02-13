import React from 'react';
import { shallow } from 'enzyme';
import {
  Navbar,
  NavbarNav,
  NavbarBrand,
  NavbarText,
  NavbarCollapse,
  NavbarToggle,
  Button
} from "../index.js";

describe('Navbar', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<Navbar></Navbar>);
    expect(component).toMatchSnapshot();
  })
  it('has expected basic props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <Navbar
        what="ever"
        className={ cn }>
        { children }
      </Navbar>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('navbar');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('nav')
  })
  it('has expected complex props', () => {
    const cn = 'neato',
          expand = size,
          vertical = 'vertical';
    const children = <div> children </div>;
    const component = shallow(
      <Navbar
        what="ever"
        color={ color }
        expand={ expand }
        fixed={ fixed }
        vertical={ vertical }
        className={ cn }>
        { children }
      </Navbar>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('navbar');
    expect(classNameArray).toContain(`navbar-${color}`);
    expect(classNameArray).toContain(`navbar-expand-${expand}`);
    expect(classNameArray).toContain(`fixed-${fixed}`);
    expect(classNameArray).toContain('navbar-vertical');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(6);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('nav')
  });
  it('excludes invalid props', () => {
    const component = shallow(
      <Navbar
        what="ever"
        color={ badColor }
        expand={ badSize }
        fixed={ badFixed }
        vertical={ badOrientation } >
      </Navbar>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('navbar');
    expect(classNameArray).not.toContain(`navbar-${badColor}`);
    expect(classNameArray).not.toContain(`navbar-expand-${badSize}`);
    expect(classNameArray).not.toContain(`fixed-${badFixed}`);
    expect(classNameArray).not.toContain('navbar-vertical');
    expect(classNameArray).toHaveLength(1)

  })
});

describe('NavbarNav', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<NavbarNav></NavbarNav>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <NavbarNav
        what="ever"
        className={ cn }>
        { children }
      </NavbarNav>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('navbar-nav');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
    expect(component.type()).toBe('nav');
  });
});

describe('NavbarBrand', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<NavbarBrand></NavbarBrand>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <NavbarBrand
        what="ever"
        className={ cn }>
        { children }
      </NavbarBrand>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('navbar-brand');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
    expect(component.type()).toBe('a');
  });
});

describe('NavbarCollapse', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<NavbarCollapse></NavbarCollapse>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <NavbarCollapse
        what="ever"
        className={ cn }>
        { children }
      </NavbarCollapse>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('collapse');
    expect(classNameArray).toContain('navbar-collapse');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
    expect(component.type()).toBe('div');
  });
});

describe('NavbarToggle', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<NavbarToggle></NavbarToggle>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const component = shallow(
      <NavbarToggle
        what="ever"
        className={ cn }>
      </NavbarToggle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('navbar-toggler');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe(Button);
  });
});

describe('NavbarText', () => {
  it('Navbar matches snapshot', () => {
    const component = shallow(<NavbarText></NavbarText>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div>children</div>
    const component = shallow(
      <NavbarText
        what="ever"
        className={ cn }>
        { children }
      </NavbarText>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('navbar-text');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
    expect(component.type()).toBe('span');
  });
});
