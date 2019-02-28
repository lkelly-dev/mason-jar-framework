import React from 'react';
import { Icon } from '../lib';

let myContext = React.createContext(false);

const App = () => (
  <div color="primary">
    <Icon context={myContext}
           some-prop={{a:1, b:3}}>
      <div>Alert!</div>
    </Icon>
  </div>
)

export default App;
