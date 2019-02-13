import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';
import {
  Dropdown,
  DropdownToggle,
  DropdownFeatherToggle,
  DropdownMenu,
  DropdownItem,
  DropdownCard,
} from "../index.js";

describe('Dropdown', () => {

  it('Dropdown matches snapshot', () => {
    const component = shallow(<Dropdown></Dropdown>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <Dropdown
        className={ cn }
        what="ever" >
        { child }
      </Dropdown>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('dropdown');
    expect(classNameArray).toContain(cn);
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('DropdownToggle', () => {

  it('DropdownToggle matches snapshot', () => {
    const component = shallow(<DropdownToggle></DropdownToggle>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <DropdownToggle
        className={ cn }
        what="ever" >
        { child }
      </DropdownToggle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(component.prop('type')).toBe('button');
    expect(component.prop('data-toggle')).toBe('dropdown');
    expect(component.prop('aria-haspopup')).toBe("true");
    expect(component.prop('aria-expanded')).toBe("false");
    expect(classNameArray).toContain('dropdown-toggle');
    expect(classNameArray).toContain(cn);
    expect(component.type()).toBe(Button);
    expect(classNameArray).toHaveLength(2);
  });
});

describe('DropdownFeatherToggle', () => {

  it('DropdownFeatherToggle matches snapshot', () => {
    const component = shallow(<DropdownFeatherToggle></DropdownFeatherToggle>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(
      <DropdownFeatherToggle
        className={ cn }
        what="ever" >
      </DropdownFeatherToggle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(component.prop('type')).toBe('button');
    expect(component.prop('data-toggle')).toBe('dropdown');
    expect(component.prop('aria-haspopup')).toBe("true");
    expect(component.prop('aria-expanded')).toBe("false");
    expect(classNameArray).toContain('dropdown-ellipses');
    expect(classNameArray).toContain('dropdown-toggle');
    expect(classNameArray).toContain(cn);
    expect(component.type()).toBe(Button);
    expect(classNameArray).toHaveLength(3);
  });
});

describe('DropdownMenu', () => {

  it('DropdownMenu matches snapshot', () => {
    const component = shallow(<DropdownMenu></DropdownMenu>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <DropdownMenu
        className={ cn }
        what="ever" >
        { child }
      </DropdownMenu>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('dropdown-menu');
    expect(classNameArray).toContain(cn);
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('DropdownItem', () => {

  it('DropdownItem matches snapshot', () => {
    const component = shallow(<DropdownItem></DropdownItem>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <DropdownItem
        className="nifty"
        what="ever" >
        { child }
      </DropdownItem>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('dropdown-item');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('DropdownCard', () => {

  it('DropdownCard matches snapshot', () => {
    const component = shallow(<DropdownCard></DropdownCard>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <DropdownCard
        className={ cn }
        what="ever" >
        { child }
      </DropdownCard>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('dropdown-menu');
    expect(classNameArray).toContain('dropdown-menu-card');
    expect(classNameArray).toContain(cn);
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(3);
  });
});
