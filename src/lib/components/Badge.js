import React, { useContext } from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Badge = props => {
  const { context, children, color, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const badgeColor = MODIFIERS.COLOR[color] ? `badge-${color}` : null;
  const badgeClass = cx('badge', badgeColor, className);
  return (
    <span className={badgeClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </span>
  );
};

export { Badge };
