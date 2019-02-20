import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Button } from './Button';
import { debugAttrs, debugMode } from '../utils/debugging';

const Modal = props => {
  const { context, elementId, children, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  return (
    <div className="modal" tabIndex="-1" role="dialog" aria-hidden="true" id={elementId}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      <div className="modal-dialog" role="document">
        {children}
      </div>
    </div>
  );
};

const ModalTrigger = props => {
  const { context, children, elementId, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  return (
    <Button data-toggle="modal" data-target={`#${elementId}`}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </Button>
  );
};

const ModalContent = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  const modalContentClass = cx('modal-content', className);
  return (
    <div className={modalContentClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const ModalHeader = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  const modalHeaderClass = cx('modal-header', className);
  return (
    <div className={modalHeaderClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const ModalBody = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  const modalBodyClass = cx('modal-body', className);
  return (
    <div className={modalBodyClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const ModalFooter = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  const modalFooterClass = cx('modal-footer', className);
  return (
    <div className={modalFooterClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const ModalTitle = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  const modalTitleClass = cx('modal-title', className);
  return (
    <h3 className={modalTitleClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </h3>
  );
};

const ModalClose = props => {
  const { context, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c);
  const modalCloseClass = cx('close', className);
  return (
    <button
      type="button"
      className={modalCloseClass}
      data-dismiss="modal"
      aria-label="Close"
      {...(debug) ? debugAttrs(props): null}
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
