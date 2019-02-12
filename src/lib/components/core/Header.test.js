import React from 'react';
import { shallow } from 'enzyme';
import {Header, HeaderBody, HeaderPretitle, HeaderSubtitle, HeaderTitle } from "./Header";

describe('Header', () => {
  it('Header matches snapshot', () => {
    const component = shallow(<Header></Header>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const children = <div>Header child</div>;
    const component = shallow(
      <Header
        className="nifty"
        what="ever">
        { children }
      </Header>
    )
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('header')
    expect(classNameArray).toContain('nifty')
    expect(classNameArray).toHaveLength(2)
    expect(component.prop('what')).toBe('ever');
  })
});

describe('HeaderBody', () => {
  it('Header matches snapshot', () => {
    const component = shallow(<HeaderBody></HeaderBody>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const children = <div>Header child</div>;
    const component = shallow(
      <HeaderBody
        className={ cn }
        what="ever">
        { children }
      </HeaderBody>
    )
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('header-body')
    expect(classNameArray).toContain(cn)
    expect(classNameArray).toHaveLength(2)
    expect(component.prop('what')).toBe('ever');
  })
});

describe('HeaderPretitle', () => {
  it('Header matches snapshot', () => {
    const component = shallow(<HeaderPretitle></HeaderPretitle>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const children = <div>Header child</div>;
    const component = shallow(
      <HeaderPretitle
        className="nifty"
        what="ever">
        { children }
      </HeaderPretitle>
    )
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('header-pretitle')
    expect(classNameArray).toContain('nifty')
    expect(classNameArray).toHaveLength(2)
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('h6');
  })

  it('takes custom element type', () => {
    const children = <div>Header child</div>;
    const component = shallow(<HeaderPretitle as='h2'>{children}</HeaderPretitle>);
    expect(component.type()).toBe('h2');
  })
});


describe('HeaderSubtitle', () => {
  it('Header matches snapshot', () => {
    const component = shallow(<HeaderSubtitle></HeaderSubtitle>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const children = <div>Header child</div>;
    const component = shallow(
      <HeaderSubtitle
        className="nifty"
        what="ever">
        { children }
      </HeaderSubtitle>
    )
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('header-subtitle');
    expect(classNameArray).toContain('nifty')
    expect(classNameArray).toHaveLength(2)
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('h6');
  })

  it('takes custom element type', () => {
    const children = <div>Header child</div>;
    const component = shallow(<HeaderSubtitle as='h2'>{children}</HeaderSubtitle>);
    expect(component.type()).toBe('h2');
  })
});

describe('HeaderTitle', () => {
  it('Header matches snapshot', () => {
    const component = shallow(<HeaderTitle></HeaderTitle>);
    expect(component).toMatchSnapshot();
  })

  it('has expected props', () => {
    const children = <div>Header child</div>;
    const component = shallow(
      <HeaderTitle
        className="nifty"
        what="ever">
        { children }
      </HeaderTitle>
    )
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('header-title');
    expect(classNameArray).toContain('nifty')
    expect(classNameArray).toHaveLength(2)
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('h1');
  })

  it('takes custom element type', () => {
    const children = <div>Header child</div>;
    const component = shallow(<HeaderTitle as='h2'>{children}</HeaderTitle>);
    expect(component.type()).toBe('h2');
  })
});
