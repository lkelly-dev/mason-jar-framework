import React from 'react';
import { Form } from '../lib';

const optionList = [
  {
    value: "1", name: "stuffer",

  },
  {
    value: "1", name: "non"
  }
];

const App = () => <div color="primary">
  <Form.SearchSelect
    options={
      optionList.map(item => ({ label: item.name, value: item.value }))
    }
  />
</div>;

export default App;
