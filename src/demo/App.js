import React from 'react';
import { Alert } from '../lib';
import { debugMode, debugAttrs } from '../lib/utils/debugging.js';

let myContext = React.createContext({ debugMode: true });

const App = () => (
  <div color="primary">
    <Alert context={myContext}
           some-prop={{a:1, b:3}}>
      <div>butt</div>
    </Alert>
  </div>
)

export default App;
