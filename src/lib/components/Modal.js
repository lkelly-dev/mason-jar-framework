import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Button } from './Button';

const Modal = props => {
  const { elementId, children } = props;
  return (
    <div className="modal" tabIndex="-1" role="dialog" aria-hidden="true" id={elementId}>
      <div className="modal-dialog" role="document">
        {children}
      </div>
    </div>
  );
};

const ModalTrigger = props => {
  const { children, elementId, ...rest } = props;
  return (
    <Button data-toggle="modal" data-target={`#${elementId}`} {...rest}>
      {children}
    </Button>
  );
};

const ModalContent = props => {
  const { children, className, ...rest } = props;
  const modalContentClass = cx('modal-content', className);
  return (
    <div className={modalContentClass} {...rest}>
      {children}
    </div>
  );
};

const ModalHeader = props => {
  const { children, className, ...rest } = props;
  const modalHeaderClass = cx('modal-header', className);
  return (
    <div className={modalHeaderClass} {...rest}>
      {children}
    </div>
  );
};

const ModalBody = props => {
  const { children, className, ...rest } = props;
  const modalBodyClass = cx('modal-body', className);
  return (
    <div className={modalBodyClass} {...rest}>
      {children}
    </div>
  );
};

const ModalFooter = props => {
  const { children, className, ...rest } = props;
  const modalFooterClass = cx('modal-footer', className);
  return (
    <div className={modalFooterClass} {...rest}>
      {children}
    </div>
  );
};

const ModalTitle = props => {
  const { children, className, ...rest } = props;
  const modalTitleClass = cx('modal-title', className);
  return (
    <h3 className={modalTitleClass} {...rest}>
      {children}
    </h3>
  );
};

const ModalClose = props => {
  const { className, ...rest } = props;
  const modalCloseClass = cx('close', className);
  return (
    <button
      type="button"
      className={modalCloseClass}
      data-dismiss="modal"
      aria-label="Close"
      {...rest}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
};

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.Close = ModalClose;
Modal.Trigger = ModalTrigger;

export { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose, ModalTrigger };

Modal.propTypes = {
  elementId: PropTypes.string.isRequired,
};

ModalTrigger.propTypes = {
  elementId: PropTypes.string.isRequired,
};
