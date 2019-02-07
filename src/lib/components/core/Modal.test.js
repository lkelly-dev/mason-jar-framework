import React from 'react';
import { shallow } from 'enzyme';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose, ModalTrigger } from "./Modal";

describe('Modal', () => {
  it('Modal matches snapshot', () => {
    const component = shallow(<Modal></Modal>);
    expect(component).toMatchSnapshot();
  })
});
