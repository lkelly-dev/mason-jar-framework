import React from 'react';
import { shallow } from 'enzyme';
import { Button, ButtonGroup } from "./Button";

describe('Button', () => {
  it('matches snapshot', () => {
    const component = shallow(<Button></Button>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', ()=> {
    const child = <div>child</div>;
    const component = shallow(
      <Button
        color={ color }
        outline={ outline }
        size={ size }
        status={ status }
        shape={ shape }
        className={ cn }
        what="ever">
        { child }
      </Button>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('btn');
    expect(classNameArray).toContain(`btn-${color}`);
    expect(classNameArray).toContain(`btn-outline-${outline}`);
    expect(classNameArray).toContain(`btn-${size}`);
    expect(classNameArray).toContain(`btn-${shape}`);
    expect(classNameArray).toContain(status);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(8);
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(child)).toEqual(true);
  })

  it('has no invalid props', ()=> {
    const component = shallow(
      <Button
        color={ badColor }
        outline={ badOutline }
        size={ badSize }
        status={ badStatus }
        shape={ badShape } >
      </Button>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('btn');
    expect(classNameArray).not.toContain(`btn-${badColor}`);
    expect(classNameArray).not.toContain(`btn-outline-${badOutline}`);
    expect(classNameArray).not.toContain(`btn-${badSize}`);
    expect(classNameArray).not.toContain(`btn-${badShape}`);
    expect(classNameArray).not.toContain(badStatus);
    expect(classNameArray).toHaveLength(2);
  });
});

describe('ButtonGroup', () => {
  it('matches snapshot', () => {
    const component = shallow(<ButtonGroup></ButtonGroup>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const child = <Button>wow</Button>;
    const component = shallow(
      <ButtonGroup
        size={ size }
        orientation={ orientation }
        className={ cn }
        what="ever">
        { child }
      </ButtonGroup>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain('btn-group');
    expect(classNameArray).toContain(`btn-group-${size}`);
    expect(classNameArray).toContain(`btn-group-${orientation}`);
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
  })

  it('has no invalid props', () => {
    const component = shallow(<ButtonGroup size={ badSize } orientation={ badOrientation }> </ButtonGroup>);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('btn-group');
    expect(classNameArray).not.toContain(`btn-group-${badSize}`);
    expect(classNameArray).not.toContain(`btn-group-${badOrientation}`);
  })
});

