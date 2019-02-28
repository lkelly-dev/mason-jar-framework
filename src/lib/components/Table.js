import React from 'react';
import { cx } from 'emotion';
// import { Button } from './Button';
// import MODIFIERS from './Modifiers';

const Table = props => {
  const { children, className, ...rest } = props;
  const tableClass = cx('table', className);
  return (
    <table className={tableClass} {...rest}>
      {children}
    </table>
  );
};

export { Table };
