import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Loader = props => {
  const { color, size, className, ...rest } = props;
  const loaderColor = MODIFIERS.COLOR[color] ? `loader-${color}` : null;
  const loaderSize = MODIFIERS.SIZE[size] ? `loader-${size}` : null;
  const loaderClass = cx('loader', loaderSize, loaderColor, className);
  return <div className={loaderClass} {...rest} />;
};

export { Loader };
