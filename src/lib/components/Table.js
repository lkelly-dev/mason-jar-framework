import React from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';
// import { Button } from './Button';
// import MODIFIERS from './Modifiers';

const Table = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const tableClass = cx('table', className);
  return (
    <table className={tableClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </table>
  );
};

export { Table };
