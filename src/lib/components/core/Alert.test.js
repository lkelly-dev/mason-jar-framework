import React from 'react';
import { shallow } from 'enzyme';
import { Alert, AlertLink, AlertHeading } from "./Alert";

describe('Alert', () => {
  it('matches snapshot', () => {
    const component = shallow(<Alert />);
    expect(component).toMatchSnapshot();
  });

  it('contains children', () => {
    const component = shallow(<Alert><div>alert!</div></Alert>);
    expect(component.contains(<div>alert!</div>)).toEqual(true);
  });

  it('has className alert', () => {
    const component = shallow(<Alert />);
    expect(component.props().className).toBe("alert");
  });

  it('appends additional className', () => {
    const component = shallow(<Alert className="monkey" />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('alert');
    expect(classNameArray).toContain('monkey');
  });
});

describe('Alert.Link', () => {
  it('matches snapshot', () => {
    const component = shallow(<AlertLink/>);
    expect(component).toMatchSnapshot();
  });

  it('contains children', () => {
    const component = shallow(<AlertLink><div>alert!</div></AlertLink>);
    expect(component.contains(<div>alert!</div>)).toEqual(true);
  });

  it('has className alert-link', () => {
    const component = shallow(<AlertLink />);
    expect(component.props().className).toBe("alert-link");
  });

  it('appends additional className', () => {
    const component = shallow(<AlertLink className="monkey" />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('alert-link');
    expect(classNameArray).toContain('monkey');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('Alert.Heading', () => {
  it('matches snapshot', () => {
    const component = shallow(<AlertHeading/>);
    expect(component).toMatchSnapshot();
  });

  it('contains children', () => {
    const component = shallow(<AlertHeading><div>headingtext</div></AlertHeading>);
    expect(component.contains(<div>headingtext</div>)).toEqual(true);
  });

  it('has className alert-link', () => {
    const component = shallow(<AlertHeading />);
    expect(component.props().className).toBe("alert-heading");
  });

  it('appends additional className', () => {
    const component = shallow(<AlertHeading className="monkey" />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('alert-heading');
    expect(classNameArray).toContain('monkey');
    expect(classNameArray).toHaveLength(2);
  });
});
