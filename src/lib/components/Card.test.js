import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardHeader, CardBody, CardText, CardTitle, CardDropdown, CardAvatar, CardTable } from "../index.js";

describe('Card', () => {
  it('matches snapshot', () => {
    const component = shallow(<Card></Card>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Card Contents</div>;
    const component = shallow(
      <Card
        className={ cn }
        what="ever">
        { child }
      </Card>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain('card');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <Card
        context={ Context }
        className={ cn }
        what="ever">
      </Card>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('CardTitle', () => {
  it('matches snapshot', () => {
    const component = shallow(<CardTitle></CardTitle>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', ()=>{
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardTitle
        className={ cn }
        what="ever">
        { child }
      </CardTitle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(classNameArray).toContain('card-title');
    expect(classNameArray).toContain('mb-0');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardTitle
        context={ Context }
        className={ cn }
        what="ever">
      </CardTitle>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('CardHeader', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardHeader></CardHeader>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardHeader
        className={ cn }
        what="ever">
        { child }
      </CardHeader>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-header')
    expect(classNameArray).toContain(cn)
    expect(classNameArray).toHaveLength(2);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardHeader
        context={ Context }
        className={ cn }
        what="ever">
      </CardHeader>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('CardBody', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardBody></CardBody>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardBody
        className={ cn }
        what="ever" >
        { child }
      </CardBody>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-body');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardBody
        context={ Context }
        className={ cn }
        what="ever">
      </CardBody>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })

});

describe('CardText', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardText></CardText>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardText
        className={ cn }
        what="ever" >
        { child }
      </CardText>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-text');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardText
      context={ Context }
      className={ cn }
      what="ever">
      </CardText>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('CardDropdown', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardDropdown></CardDropdown>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardDropdown
        className={ cn }
        what="ever" >
        { child }
      </CardDropdown>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('dropdown');
    expect(classNameArray).toContain('card-dropdown');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardDropdown
      context={ Context }
      className={ cn }
      what="ever">
      </CardDropdown>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('CardAvatar', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardAvatar></CardAvatar>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardAvatar
        className={ cn }
        what="ever" >
        { child }
      </CardAvatar>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('avatar');
    expect(classNameArray).toContain('card-avatar');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardAvatar
      context={ Context }
      className={ cn }
      what="ever">
      </CardAvatar>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('CardTable', () => {

  it('matches snapshot', () => {
    const component = shallow(<CardTable></CardTable>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const child = <div>Child Component</div>;
    const component = shallow(
      <CardTable
        className={ cn }
        what="ever" >
        { child }
      </CardTable>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(child)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('card-table');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <CardTable
      context={ Context }
      className={ cn }
      what="ever">
      </CardTable>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});
