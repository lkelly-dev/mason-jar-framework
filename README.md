# Ronoco Bootstrap

## Installation

`yarn add git+https://liam-ronoco:sPQ5suAVsmkVFM3wLHAK@bitbucket.org/ronocodev/ronoco-bootstrap.git#*`

to install specific version add #v.v.v (i.e. #1.0.0) to the end of dependency URL.

## Usage

```
import React from 'react';
import { Button } from 'ronoco-bootstrap';
import 'ronoco-bootstrap/build/index.css';

const App = () => <Button color="primary">Test</Button>;

export default App;

```

## Updating the package:

1. Update version number in package.json
2. Build module:

```
yarn run build
```

3. Commit

## Demo

To run demo on your own computer:

- Clone this repository
- `npm install`
- `npm start`
- Visit http://localhost:3000/
