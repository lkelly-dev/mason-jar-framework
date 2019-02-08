import React from 'react';
import { shallow } from 'enzyme';
import Select from 'react-select';
import {
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
} from "./Form";

describe('Form', () => {

  it('Form matches snapshot', () => {
    const component = shallow(<Form></Form>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <Form
        className="nifty"
        what="ever" >
        { childComponent }
      </Form>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('form');
    expect(classNameArray).toHaveLength(1);
  });
});

describe('FormGroup', () => {

  it('FormGroup matches snapshot', () => {
    const component = shallow(<FormGroup></FormGroup>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <FormGroup
        className="nifty"
        what="ever" >
        { childComponent }
      </FormGroup>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-group');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('FormRow', () => {

  it('FormRow matches snapshot', () => {
    const component = shallow(<FormRow></FormRow>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <FormRow
        className="nifty"
        what="ever" >
        { childComponent }
      </FormRow>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-row');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(2);
  });
});

describe('FormInput', () => {

  it('FormInput matches snapshot', () => {
    const component = shallow(<FormInput></FormInput>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <FormInput className="nifty" validity="valid" what="ever" />
    );
    // TODO check to make sure passing in children throws an error
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-control');
    expect(classNameArray).toContain('valid');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('input');
    expect(classNameArray).toHaveLength(3);
  });
});

describe('FormSelect', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormSelect></FormSelect>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(
      <FormSelect
        className="nifty"
        validity="valid"
        what="ever" />
    );
    // TODO should take a data array for creating options, and disallow children
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-control');
    expect(classNameArray).toContain('valid');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('select');
    expect(classNameArray).toHaveLength(3);
  });
});

describe('FormSearchSelect', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormSearchSelect></FormSearchSelect>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(
      <FormSearchSelect
        className="nifty"
        validity="valid"
        what="ever" />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-control');
    expect(classNameArray).toContain('valid');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe(Select);
    expect(classNameArray).toHaveLength(3);
  });
});

describe('FormTextarea', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormTextarea></FormTextarea>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const component = shallow(
      <FormTextarea
        className="nifty"
        validity="valid"
        what="ever" />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-control');
    expect(classNameArray).toContain('valid');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('textarea');
    expect(classNameArray).toHaveLength(3);
  });
});

describe('FormLabel', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormLabel></FormLabel>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const childComponent = <div>Child Component</div>;
    const component = shallow(
      <FormLabel
        className="nifty"
        validity="valid"
        what="ever">
        { childComponent }
      </FormLabel>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.contains(childComponent)).toEqual(true);
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-check-label');
    expect(classNameArray).toContain('valid');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('label');
    expect(classNameArray).toHaveLength(3);
  });
});

describe('FormCheck', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormCheck></FormCheck>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const compId = "comp-id";
    const labelValue = 'this is a label';
    const component = shallow(
      <FormCheck
        className="nifty"
        validity="valid"
        id={compId}
        label={labelValue}
        what="ever">
      </FormCheck>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('form-group');
    expect(classNameArray).toContain('form-check');
    expect(classNameArray).toContain('valid');
    expect(classNameArray).toContain('nifty');
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(4);
    expect(component.find('input').prop('id')).toBe(compId);
    expect(component.find('label').prop('htmlFor')).toBe(compId);
    expect(component.find('label').contains(labelValue)).toEqual(true);
  });
});

describe('FormToggle', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormToggle></FormToggle>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const compId = "some-id";
    const component = shallow(
      <FormToggle
        id={compId}
        className="nifty"
        what="ever">
      </FormToggle>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toContain('custom-control'); // FIXME are these classnames okay??
    expect(classNameArray).toContain('custom-checkbox-toggle');
    expect(component.type()).toBe('div');
    expect(classNameArray).toHaveLength(3);
    expect(component.find('input').prop('id')).toBe(compId);
    expect(component.find('label').prop('htmlFor')).toBe(compId);
  });
});

describe('FormDatePicker', () => {

  it('matches snapshot', () => {
    const component = shallow(<FormDatepicker />);
    expect(component).toMatchSnapshot();
  });

  it('has expected props without options', () => {
    const component = shallow(<FormDatepicker />);
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('form-control');
    expect(classNameArray).toHaveLength(1);
    expect(component.prop('placeholder')).toBe('Pick a date');
    expect(component.prop('data-flatpickr-mode')).toBe(null)
  });

  it('has expected props with options', () => {
    const placeholder = 'pick a date, fool!';
    const mode = "no-idea";
    const component = shallow(
      <FormDatepicker
        className="nifty"
        placeholder={ placeholder }
        mode={ mode } />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('form-control');
    expect(classNameArray).toContain('nifty');
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('placeholder')).toBe(placeholder);
    expect(component.prop('data-flatpickr-mode')).toBe(mode);
  });
});

describe('FormUpload', () => {
  it('matches snapshot', () => {
    const component = shallow(<FormUpload />);
    expect(component).toMatchSnapshot();
  })
  // TODO write tests. also implement the component itself!
});
