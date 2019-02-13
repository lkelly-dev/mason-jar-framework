import React from 'react';
import { cx } from 'emotion';

const Icon = props => {
  const { children, name, className, as, ...rest } = props;
  const iconName = `fe fe-${name}`;
  const iconClass = cx(iconName, className);
  const Component = as || 'span';
  return <Component className={iconClass} {...rest} />;
};

export { Icon };
