import React from 'react';
import { shallow } from 'enzyme';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalTrigger,
  Button
} from '../index.js';

describe('Modal', () => {
  it('matches snapshot', () => {
    const component = shallow(<Modal elementId="div"></Modal>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const id = "some-id"
    const children = <div>child</div>
    const component = shallow(
      <Modal elementId={ id }>
        { children }
      </Modal>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(children)).toEqual(true);
    expect(classNameArray).toContain('modal');
    expect(component.prop('id')).toBe(id);
    expect(classNameArray).toHaveLength(1);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const id = "some-id";
    const child = "text";
    const component = shallow(
      <Modal
        context={ Context }
        elementId={ id }
        className={ cn }
        what="ever">
        { child }
      </Modal>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-id')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-elementId')).toBe(id);
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('ModalTrigger', () => {
  it('matches snapshot', () => {
    //FIXME element should not be required. also the name is not great
    const component = shallow(<ModalTrigger elementId="div"></ModalTrigger>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const id = "some-id"
    const children = <div>child</div>
    const component = shallow(
      <ModalTrigger what="ever" elementId={ id }>
      { children }
      </ModalTrigger>
    );
    expect(component.contains(children)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(component.prop('data-target')).toBe(`#${id}`);
    expect(component.type()).toBe(Button);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const id = "some-id";
    const child = "text";
    const component = shallow(
      <ModalTrigger
        context={ Context }
        elementId={ id }
        className={ cn }
        what="ever">
        { child }
      </ModalTrigger>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    // make sure its not catching and modifying pre-defined data-attrs...
    expect(component.prop('data-data-toggle')).not.toBeDefined(); 
    expect(component.prop('data-id')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-elementId')).toBe(id);
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('Modal.Content', () => {
  it('matches snapshot', () => {
    //FIXME element should not be required. also the name is not great
    const component = shallow(<Modal.Content element="div"></Modal.Content>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <Modal.Content
        what="ever"
        className={ cn } >
        { children }
      </Modal.Content>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toContain('modal-content');
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('div')
    expect(component.contains(children)).toEqual(true);
  });

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <Modal.Content
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </Modal.Content>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  });

});

describe('ModalHeader', () => {
  it('matches snapshot', () => {
    const component = shallow(<ModalHeader></ModalHeader>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <ModalHeader
        what="ever"
        className={ cn }>
        { children }
      </ModalHeader>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('modal-header');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('div')
    expect(component.contains(children)).toEqual(true);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <ModalHeader
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </ModalHeader>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })

});

describe('ModalBody', () => {
  it('matches snapshot', () => {
    const component = shallow(<ModalBody></ModalBody>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <ModalBody
        what="ever"
        className={ cn }>
        { children }
      </ModalBody>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('modal-body');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('div')
    expect(component.contains(children)).toEqual(true);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <ModalBody
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </ModalBody>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })

});

describe('ModalFooter', () => {
  it('matches snapshot', () => {
    const component = shallow(<ModalFooter></ModalFooter>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <ModalFooter
        what="ever"
        className={ cn }>
        { children }
      </ModalFooter>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('modal-footer');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('div')
    expect(component.contains(children)).toEqual(true);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <ModalFooter
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </ModalFooter>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('ModalTitle', () => {
  it('matches snapshot', () => {
    const component = shallow(<ModalTitle></ModalTitle>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const children = <div> children </div>;
    const component = shallow(
      <ModalTitle
        what="ever"
        className={ cn }>
        { children }
      </ModalTitle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('modal-title');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
    expect(component.type()).toBe('h3')
    expect(component.contains(children)).toEqual(true);
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <ModalTitle
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </ModalTitle>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});

describe('ModalClose', () => {
  it('matches snapshot', () => {
    const component = shallow(<ModalClose></ModalClose>);
    expect(component).toMatchSnapshot();
  })
  it('has expected props', () => {
    const component = shallow(
      <ModalClose
        what="ever"
        className={ cn }>
      </ModalClose>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toHaveLength(2);
    expect(classNameArray).toContain('close');
    expect(classNameArray).toContain(cn);
    expect(component.prop('what')).toBe('ever');
    expect(component.prop('data-dismiss')).toBe('modal');
    expect(component.prop('aria-label')).toBe('Close');
    expect(component.type()).toBe('button')
  })

  it('appends data-attributes in debugMode', () => {
    const Context = React.createContext({debugMode: true});
    const child = "text";
    const component = shallow(
      <ModalClose
        context={ Context }
        className={ cn }
        what="ever">
        { child }
      </ModalClose>
    );
    expect(component.prop('data-context')).not.toBeDefined();
    expect(component.prop('data-children')).not.toBeDefined();
    expect(component.prop('data-what')).toBe('ever');
    expect(component.prop('data-className')).toBe(cn);
  })
});
