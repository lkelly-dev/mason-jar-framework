import React, { useContext } from 'react';
import { debugAttrs, debugMode } from '../utils/debugging';

const Image = props => {
  const { context, className, alt, aria, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  return (
    <img className={className}
         {...(debug) ? debugAttrs(props): null}
         {...rest} alt={alt} aria-label={aria} />
  );
};

export { Image };
