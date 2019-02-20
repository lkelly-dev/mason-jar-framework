import React from 'react';
import { shallow } from 'enzyme';
import { Image } from "../index.js";

describe('Image', () => {
  it('Image matches snapshot', () => {
    const component = shallow(<Image></Image>);
    expect(component).toMatchSnapshot();
  })
  it('should have expected props', () => {
    const alt = "image description";
    const aria = "aria label";
    const component = shallow(
      <Image
        className={cn}
        alt={alt}
        aria={aria}
        what="ever"/>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('aria-label')).toBe(aria);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(1);
    expect(component.prop('alt')).toBe(alt);
    expect(component.prop('what')).toBe('ever');
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const alt = "alt text";
    const aria = "aria text";
    const component = shallow(
      <Image
        context={ Context }
        alt={ alt }
        aria={ aria }
        className={ cn }
        what="ever">
      </Image>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-alt')).toBe(alt);
    expect(component.prop('data-aria')).toBe(aria);
    expect(component.prop('data-className')).toBe(cn);
  })
});
