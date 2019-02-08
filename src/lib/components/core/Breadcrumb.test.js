import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

describe('Breadcrumb', () => {
  it('Breadcrumb matches snapshot', () => {
    const component = shallow(<Breadcrumb></Breadcrumb>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(
      <Breadcrumb className="neato">
        <div>someNavThing</div>
      </Breadcrumb>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(<div>someNavThing</div>)).toEqual(true);
    expect(classNameArray).toContain('breadcrumb');
    expect(classNameArray).toContain('neato');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('BreadcrumbItem', () => {
  it('Breadcrumb matches snapshot', () => {
    const component = shallow(<BreadcrumbItem></BreadcrumbItem>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const component = shallow(<BreadcrumbItem status="active" className="neato" whatever="dude">A</BreadcrumbItem>);
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('children')).toBe('A');
    expect(classNameArray).toContain('breadcrumb-item');
    expect(classNameArray).toContain('active');
    expect(classNameArray).toContain('neato');
    expect(classNameArray).toHaveLength(3);
    expect(component.prop('className')).toBe('breadcrumb-item active neato');
    expect(component.prop('whatever')).toBe('dude');
  });
});
