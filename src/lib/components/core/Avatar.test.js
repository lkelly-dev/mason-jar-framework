import React from 'react';
import { shallow } from 'enzyme';
import { Avatar, AvatarImage, AvatarTitle } from "./Avatar";

describe('Avatar', () => {

  it('matches snapshot', () => {
    const component = shallow(<Avatar />);
    expect(component).toMatchSnapshot();
  });

  it('contains children', () => {
    const component = shallow(<Avatar>A</Avatar>);
    expect(component.props().children).toBe("A");
  });

  it('has expected classnames', () => {
    const componentBasic = shallow(<Avatar><div>A</div></Avatar>);
    const componentWithOptions = shallow(<Avatar size="sm" status="offline" className="nifty" whatever="dude">A</Avatar>);
    const classNameArray = componentWithOptions.prop('className').split(' ');
    expect(componentBasic.props().className).toBe('avatar');
    expect(componentBasic.contains(<div>A</div>)).toEqual(true);
    expect(classNameArray).toContain('avatar');
    expect(classNameArray).toContain('avatar-sm');
    expect(classNameArray).toContain('avatar-offline');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(4)
    expect(componentWithOptions.prop('whatever')).toBe('dude');
  });
});

describe('Avatar.Image', () => {

  it('matches snapshot', () => {
    const component = shallow(<AvatarImage />);
    expect(component).toMatchSnapshot();
  });

  it('has correct props', () => {
    const component = shallow(<AvatarImage shape="rounded" alt="User Avatar" className="nifty" whatever="dude" />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('avatar-img');
    expect(classNameArray).toContain('rounded');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('alt')).toBe("User Avatar");
    expect(component.prop('whatever')).toBe('dude');
  });
});

describe('Avatar.Title', () => {

  it('matches snapshot', () => {
    const component = shallow(<AvatarTitle />);
    expect(component).toMatchSnapshot();
  });

  it('has correct props', () => {
    const component = shallow(<AvatarTitle shape="rounded" className="nifty" whatever="dude">avatar body</AvatarTitle>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('avatar-title');
    expect(classNameArray).toContain('rounded');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('whatever')).toBe('dude');
    expect(component.prop('children')).toBe('avatar body')
  });
});
