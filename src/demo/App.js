import React from 'react';
import { Alert } from '../lib';

let myContext = React.createContext({ debugMode: true });

const App = () => (
  <div color="primary">
    <Alert context={myContext} some-prop={{a:1, b:3}}><div>butt</div></Alert>
  </div>
)

export default App;
