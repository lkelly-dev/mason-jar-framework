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
    const componentBasic = shallow(<Avatar>A</Avatar>);
    const componentWithOptions = shallow(<Avatar size="sm" status="offline" className="nifty" whatever="dude">A</Avatar>);
    expect(componentBasic.props().className).toBe('avatar');
    expect(componentBasic.props().children).toBe('A');
    expect(componentWithOptions.props().className).toBe('avatar avatar-sm avatar-offline nifty');
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
    expect(component.props().className).toBe('avatar-img rounded nifty');
    // TODO test alt text
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
    expect(component.props().className).toBe('avatar-title rounded nifty');
    expect(component.prop('whatever')).toBe('dude');
    expect(component.prop('children')).toBe('avatar body')
  });
});
