import React, { useContext } from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Icon = props => {
  const { context, children, name, className, as, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const iconName = `fe fe-${name}`;
  const iconClass = cx(iconName, className);
  const Component = as || 'span';
  return (
    <Component className={iconClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest} />
  );
};

export { Icon };
