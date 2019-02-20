import React  from 'react';
import { shallow } from 'enzyme';
import { Header, HeaderBody, HeaderPretitle, HeaderSubtitle, HeaderTitle } from "../index.js";

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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const component = shallow(
      <Header
        context={ Context }
        className={ cn }
        what="ever">
      </Header>
    );
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const children = <div>child</div>
    const component = shallow(
      <HeaderBody
        context={ Context }
        className={ cn }
        what="ever">
        { children }
      </HeaderBody>
    );
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const children = <div>child</div>
    const component = shallow(
    <HeaderPretitle
      context={ Context }
      className={ cn }
      as="h2"
      what="ever">
      { children }
    </HeaderPretitle>
    );
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-as')).toBe('h2');
    expect(component.prop('data-className')).toBe(cn);
  });
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const children = <div>child</div>
    const component = shallow(
    <HeaderSubtitle
      context={ Context }
      className={ cn }
      as="h2"
      what="ever">
      { children }
    </HeaderSubtitle>
    );
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-as')).toBe('h2');
    expect(component.prop('data-className')).toBe(cn);
  });
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

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const children = <div>child</div>
    const component = shallow(
    <HeaderTitle
      context={ Context }
      className={ cn }
      as="h2"
      what="ever">
      { children }
    </HeaderTitle>
    );
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-as')).toBe('h2');
    expect(component.prop('data-className')).toBe(cn);
  });
});
