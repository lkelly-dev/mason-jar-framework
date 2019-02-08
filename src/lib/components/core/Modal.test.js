import React from 'react';
import { shallow } from 'enzyme';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose, ModalTrigger } from "./Modal";

describe('Modal', () => {
  it('Modal matches snapshot', () => {
    //FIXME element should not be required. also the name is not great
    const component = shallow(<Modal element="div"></Modal>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const id = "some-id"
    const children = <div>child</div>
    const component = shallow(
      <Modal element={ id }>
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
