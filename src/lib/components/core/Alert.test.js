import React from 'react';
import { shallow } from 'enzyme';
import { Alert, AlertLink, AlertHeading } from "./Alert";

describe('Alert', () => {
  it('matches snapshot', () => {
    const component = shallow(<Alert />);
    expect(component).toMatchSnapshot();
  });

  it('contains children', () => {
    const component = shallow(<Alert>butts</Alert>);
    expect(component.props().children).toBe("butts");
  });

  it('has className alert', () => {
    const component = shallow(<Alert />);
    expect(component.props().className).toBe("alert");
  });

  it('appends additional className', () => {
    const component = shallow(<Alert className="monkey" />);
    expect(component.props().className).toBe("alert monkey");
  });

});

describe('Alert.Link', () => {
  it('matches snapshot', () => {
    const component = shallow(<AlertLink/>);
    expect(component).toMatchSnapshot();
  });
  it('contains children', () => {
    const component = shallow(<AlertLink>butts</AlertLink>);
    expect(component.props().children).toBe('butts');
  });
  it('has className alert-link', () => {
    const component = shallow(<AlertLink />);
    expect(component.props().className).toBe("alert-link");
  });

  it('appends additional className', () => {
    const component = shallow(<AlertLink className="monkey" />);
    expect(component.props().className).toBe("alert-link monkey");
  });
});

describe('Alert.Heading', () => {
  it('matches snapshot', () => {
    const component = shallow(<AlertHeading/>);
    expect(component).toMatchSnapshot();
  });
  it('contains children', () => {
    const component = shallow(<AlertHeading>butts</AlertHeading>);
    expect(component.props().children).toBe('butts');
  });
  it('has className alert-link', () => {
    const component = shallow(<AlertHeading />);
    expect(component.props().className).toBe("alert-heading");
  });

  it('appends additional className', () => {
    const component = shallow(<AlertHeading className="monkey" />);
    expect(component.props().className).toBe("alert-heading monkey");
  });
});
