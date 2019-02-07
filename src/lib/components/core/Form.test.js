import React from 'react';
import { shallow } from 'enzyme';
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
  })
});
