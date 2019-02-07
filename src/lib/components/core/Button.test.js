import React from 'react';
import { shallow } from 'enzyme';
import { Button, ButtonGroup } from "./Button";

describe('Button', () => {
  it('matches snapshot', () => {
    const component = shallow(<Button></Button>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', ()=> {
    const component = shallow(
      <Button
        color="primary"
        outline="warning"
        size="sm"
        status="active"
        shape="rounded"
        className="nifty"
        whatever="dude">
        {"Cool"}
      </Button>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('btn');
    expect(classNameArray).toContain('btn-primary');
    expect(classNameArray).toContain('btn-outline-warning');
    expect(classNameArray).toContain('btn-sm');
    expect(classNameArray).toContain('btn-rounded');
    expect(classNameArray).toContain('active');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(8);
    expect(component.prop('whatever')).toBe('dude');
  })
});

describe('ButtonGroup', () => {
  it('matches snapshot', () => {
    const component = shallow(<ButtonGroup></ButtonGroup>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const component = shallow(
      <ButtonGroup
        size="sm"
        orientation="vertical"
        className="neato"
        whatever="dude">
        <Button>wow</Button>
      </ButtonGroup>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(<Button>wow</Button>)).toEqual(true);
    expect(classNameArray).toContain('btn-group');
    expect(classNameArray).toContain('btn-group-sm');
    expect(classNameArray).toContain('btn-group-vertical');
    expect(classNameArray).toContain('neato');
    expect(component.prop('whatever')).toBe('dude');
  })
});

