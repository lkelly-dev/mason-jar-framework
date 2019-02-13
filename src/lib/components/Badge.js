import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Badge = props => {
  const { children, color, className, ...rest } = props;
  const badgeColor = MODIFIERS.COLOR[color] ? `badge-${color}` : null;
  const badgeClass = cx('badge', badgeColor, className);
  return (
    <span className={badgeClass} {...rest}>
      {children}
    </span>
  );
};

export { Badge };
