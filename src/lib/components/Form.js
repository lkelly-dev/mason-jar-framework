import React, { useContext } from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import Select from 'react-select';
import { debugAttrs, debugMode } from '../utils/debugging';

const Form = props => {
  const { context, children, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  return (
    <form
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </form>
  );
};

const FormGroup = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formGroupClass = cx('form-group', className);
  return (
    <div className={formGroupClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const FormRow = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formGroupClass = cx('form-row', className);
  return (
    <div className={formGroupClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const FormInput = props => {
  const { context, validity, className, as, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  if(typeof rest['children'] !== 'undefined') { throw new Error('input elements cannot contain children')}
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  const Component = as || 'input';
  return (
    <Component className={formClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest} />
  );
};


const FormSelect = props => {
  const { context, validity, className, children, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  return (
    <select className={formClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      { children }
    </select>
  );
};

const FormSearchSelect = props => {
  const { context, validity, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  return (
    <Select className={formClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest} />
  );
};

const FormTextarea = props => {
  const { context, validity, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-control', formValidity, className);
  return (
    <textarea className={formClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest} />
  );
};

const FormLabel = props => {
  const { context, children, validity, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-check-label', formValidity, className);
  return (
    <label className={formClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </label>
  );
};

const FormCheck = props => {
  const { context, validity, className, label, id, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const formValidity = MODIFIERS.VALIDITY[validity] ? `${validity}` : null;
  const formClass = cx('form-group', 'form-check', formValidity, className);
  return (
    <div className={formClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      <input type="checkbox" className="form-check-input" id={id} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const FormToggle = props => {
  const { context, id, onChange, className, ...rest } = props
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const toggleClass = cx('custom-control', 'custom-checkbox-toggle', className);
  return (
    <div className={toggleClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      <input type="checkbox" className="custom-control-input" id={id} onChange={onChange} />
      <label className="custom-control-label" htmlFor={id} />
    </div>
  );
};

const FormDatepicker = props => {
  const { context, children, validity, className, placeholder, mode, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const datepickerClass = cx('form-control', className);
  // FIXME mode doesnt seem to be implemented
  // FIXME children doesnt seem to be implemented
  // FIXME validity doesnt seem to be implemented
  return (
    <input
      type="text"
      className={datepickerClass}
      placeholder={placeholder || 'Pick a date'}
      data-toggle="flatpickr"
      data-flatpickr-mode={mode || null} 
      {...(debug) ? debugAttrs(props): null}
      {...rest}
    />
  );
};

// TODO: Implement
const FormUpload = props => {
  const { label, formID } = props;
  return (
    <div
      className="dropzone dropzone-single"
      data-toggle="dropzone"
      data-dropzone-url="http://google.com"
    >
      <div className="fallback">
        <div className="custom-file">
          <input typename="file" className="custom-file-input" id={formID} />
          <label className="custom-file-label" htmlFor={formID}>
            {label}
          </label>
        </div>
      </div>

      <div className="dz-preview dz-preview-single">
        <div className="dz-preview-cover">
          <img className="dz-preview-img" src="..." alt="..." data-dz-thumbnail />
        </div>
      </div>
    </div>
  );
};

Form.Group = FormGroup;
Form.Row = FormRow;
Form.Input = FormInput;
Form.Select = FormSelect;
Form.Textarea = FormTextarea;
Form.Label = FormLabel;
Form.Upload = FormUpload;
Form.Toggle = FormToggle;
Form.Datepicker = FormDatepicker;
Form.Check = FormCheck;
Form.SearchSelect = FormSearchSelect;

export {
  Form,
  FormGroup,
  FormRow,
  FormInput,
  FormSelect,
  FormTextarea,
  FormLabel,
  FormUpload,
  FormDatepicker,
  FormToggle,
  FormCheck,
  FormSearchSelect,
};
