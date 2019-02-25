import React from 'react';
import { debugAttrs, debugMode } from '../utils/debugging';

const Image = props => {
  const { context, className, alt, aria, ...rest } = props;
  const debug = debugMode(context)
  return (
    <img className={className}
         {...(debug && debugAttrs(props)) }
         {...rest} alt={alt} aria-label={aria} />
  );
};

export { Image };
