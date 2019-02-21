import React, { useContext } from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Icon = props => {
  const { context, children, name, className, as, ...rest } = props;
  const debug = debugMode(context)
  const iconName = `fe fe-${name}`;
  const iconClass = cx(iconName, className);
  const Component = as || 'span';
  return (
    <Component className={iconClass}
      {...(debug && debugAttrs(props)) }
      {...rest} />
  );
};

export { Icon };
