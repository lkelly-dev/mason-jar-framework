import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb, BreadcrumbItem } from "../index.js";

describe('Breadcrumb', () => {
  it('Breadcrumb matches snapshot', () => {
    const component = shallow(<Breadcrumb></Breadcrumb>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>someNavThing</div>;
    const component = shallow(
      <Breadcrumb className={ cn }>
        { child }
      </Breadcrumb>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain('breadcrumb');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode:true});
    const component = shallow(<Breadcrumb context={Context} what="ever"/>);
    expect(component.prop('data-what')).toBe('ever');
  });
});

describe('BreadcrumbItem', () => {
  it('Breadcrumb matches snapshot', () => {
    const component = shallow(<BreadcrumbItem></BreadcrumbItem>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const child = <div>someNavThing</div>;
    const component = shallow(
      <BreadcrumbItem status={ status } className={ cn } whatever="dude">
        { child }
      </BreadcrumbItem>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true)
    expect(classNameArray).toContain('breadcrumb-item');
    expect(classNameArray).toContain(status);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('whatever')).toBe('dude');
  });

  it('doesnt use incorrect props', () => {
    const component = shallow(<BreadcrumbItem status={ badStatus } />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).not.toContain(badStatus);
    expect(classNameArray).toHaveLength(1);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode:true});
    const component = shallow(<BreadcrumbItem context={Context} what="ever"/>);
    expect(component.prop('data-what')).toBe('ever');
  });
});
