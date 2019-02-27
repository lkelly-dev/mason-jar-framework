import React from 'react';
import { Icon } from '../lib';
// import { debugMode, debugAttrs } from '../lib/utils/debugging.js';

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
