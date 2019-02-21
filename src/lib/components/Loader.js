import React, { useContext } from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Loader = props => {
  const { context, color, size, className, ...rest } = props;
  const debug = debugMode(context)
  const loaderColor = MODIFIERS.COLOR[color] ? `loader-${color}` : null;
  const loaderSize = MODIFIERS.SIZE[size] ? `loader-${size}` : null;
  const loaderClass = cx('loader', loaderSize, loaderColor, className);
  return (
    <div className={loaderClass}
         {...(debug && debugAttrs(props)) }
         {...rest} />
  );
};

export { Loader };
