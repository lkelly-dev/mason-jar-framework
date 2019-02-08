import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardHeader, CardBody, CardText, CardTitle, CardDropdown, CardAvatar, CardTable } from "./Card";

describe('Card', () => {
  it('matches snapshot', () => {
    const component = shallow(<Card></Card>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(<Card className="cool-dude" random="attribute"><div>Card Contents</div></Card>);
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(<div>Card Contents</div>)).toEqual(true);
    expect(classNameArray).toContain('card');
    expect(classNameArray).toContain('cool-dude');
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('random')).toBe('attribute');
  });
});

describe('CardTitle', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardTitle></CardTitle>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', ()=>{
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardTitle
        className="the-best-class"
        random="attribute">
        { childComponent }
      </CardTitle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(classNameArray).toContain('card-title');
    expect(classNameArray).toContain('mb-0'); // wtf is this?
    expect(classNameArray).toContain('the-best-class');
    expect(component.prop('random')).toBe('attribute');
  });
});

describe('CardHeader', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardHeader></CardHeader>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardHeader
        className="such-a-header"
        someAttr="someValue">
        { childComponent }
      </CardHeader>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('someAttr')).toBe('someValue');
    expect(classNameArray).toContain('card-header')
    expect(classNameArray).toContain('such-a-header')
    expect(classNameArray).toHaveLength(2);
  })
});

describe('CardBody', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardBody></CardBody>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardBody
        className="nifty"
        what="ever" >
        { childComponent }
      </CardBody>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-body');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('CardText', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardText></CardText>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardText
        className="nifty"
        what="ever" >
        { childComponent }
      </CardText>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-text');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('CardDropdown', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardDropdown></CardDropdown>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardDropdown
        className="nifty"
        what="ever" >
        { childComponent }
      </CardDropdown>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('dropdown');
    expect(classNameArray).toContain('card-dropdown');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(3);
  });
});

describe('CardAvatar', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardAvatar></CardAvatar>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardAvatar
        className="nifty"
        what="ever" >
        { childComponent }
      </CardAvatar>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('avatar');
    expect(classNameArray).toContain('card-avatar');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(3);
  });
});

describe('CardTable', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardTable></CardTable>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <CardTable
        className="nifty"
        what="ever" >
        { childComponent }
      </CardTable>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-table');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(2);
  });
});
