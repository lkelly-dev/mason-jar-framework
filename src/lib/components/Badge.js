import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Badge = props => {
  const { context, children, color, className, ...rest } = props;
  const debug = debugMode(context)
  const badgeColor = MODIFIERS.COLOR[color] ? `badge-${color}` : null;
  const badgeClass = cx('badge', badgeColor, className);
  return (
    <span className={badgeClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </span>
  );
};

export { Badge };
