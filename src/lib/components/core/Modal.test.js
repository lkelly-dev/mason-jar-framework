import React from 'react';
import { shallow } from 'enzyme';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose, ModalTrigger } from './Modal';
import { Button } from './Button';

// TODO discuss why there is inconsistency in use of the 'element' prop. id / data-trigger


describe('Modal', () => {
  it('matches snapshot', () => {
    //FIXME Should element be required? also the name is not great. Maybe elementId or just use id...
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
});
