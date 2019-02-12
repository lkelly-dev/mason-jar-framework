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
    const child = <div>child</div>,
          size = 'sm',
          status = 'offline',
          cn = 'nifty';
    const componentBasic = shallow(<Avatar>{ child }</Avatar>);
    const componentWithOptions = shallow(
      <Avatar
        size={ size }
        status= { status }
        className={ cn }
        whatever="dude">
        { child }
      </Avatar>
    );
    const classNameArray = componentWithOptions.prop('className').split(' ');
    expect(componentBasic.props().className).toBe('avatar');
    expect(componentBasic.contains(child)).toEqual(true);
    expect(classNameArray).toContain('avatar');
    expect(classNameArray).toContain(`avatar-${size}`);
    expect(classNameArray).toContain(`avatar-${status}`);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(4)
    expect(componentWithOptions.prop('whatever')).toBe('dude');
  });

  it('doesnt use invalid prop values', () => {
    const size = 'wicked-big',
          status = 'single';
    const component = shallow(<Avatar size={ size } status={ status }/>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).not.toContain(`avatar-${size}`);
    expect(classNameArray).not.toContain(`avatar-${status}`);
    expect(classNameArray).toHaveLength(1)
  });
});

describe('AvatarImage', () => {

  it('matches snapshot', () => {
    const component = shallow(<AvatarImage />);
    expect(component).toMatchSnapshot();
  });

  it('has correct props', () => {
    const component = shallow(<AvatarImage shape={ shape } alt="User Avatar" className={ cn } whatever="dude" />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('avatar-img');
    expect(classNameArray).toContain(shape);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('alt')).toBe("User Avatar");
    expect(component.prop('whatever')).toBe('dude');
  });

  it('doesnt use invalid prop values', () => {
    const component = shallow(<AvatarImage shape={ badShape }/>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).not.toContain(badShape);
    expect(classNameArray).toHaveLength(1)
  });
});

describe('AvatarTitle', () => {

  it('matches snapshot', () => {
    const component = shallow(<AvatarTitle />);
    expect(component).toMatchSnapshot();
  });

  it('has correct props', () => {
    const child = <div>child</div>;
    const component = shallow(
      <AvatarTitle
        shape={ shape }
        className={ cn }
        whatever="dude">
        { child }
      </AvatarTitle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('avatar-title');
    expect(classNameArray).toContain(shape);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('whatever')).toBe('dude');
    expect(component.contains(child)).toEqual(true)
  });

  it('doesnt use invalid prop values', () => {
    const component = shallow(<AvatarTitle shape={ badShape }/>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).not.toContain(badShape);
    expect(classNameArray).toHaveLength(1)
  });
});
