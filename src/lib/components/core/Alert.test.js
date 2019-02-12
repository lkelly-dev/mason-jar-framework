import React from 'react';
import { shallow } from 'enzyme';
import { Alert, AlertLink, AlertHeading } from "./Alert";

describe('Alert', () => {
  it('matches snapshot', () => {
    const component = shallow(<Alert />);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>alert!</div>;
    const component = shallow(<Alert color={ color }>{ child }</Alert>);
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain(`alert-${color}`)
    expect(classNameArray).toContain("alert");
  });

  it('appends additional className', () => {
    const component = shallow(<Alert className={ cn }/>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('alert');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);

  });
  it('doesnt append class for incorrect color parameters', () => {
    const component = shallow(<Alert color={ badColor }>child</Alert>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).not.toContain(`alert-${badColor}`);
  });
});

describe('AlertLink', () => {
  it('matches snapshot', () => {
    const component = shallow(<AlertLink/>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>alert!</div>;
    const component = shallow(
      <AlertLink
        className={ cn }>
        { child }
      </AlertLink>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toContain('alert-link');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('AlertHeading', () => {
  it('matches snapshot', () => {
    const component = shallow(<AlertHeading/>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>headingtext</div>;
    const component = shallow(<AlertHeading className={ cn }>{ child }</AlertHeading>);
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain('alert-heading');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });
});
