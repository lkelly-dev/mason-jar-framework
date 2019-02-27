import React from 'react';
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

/*
const Icon2 = props => {
  const { context, children, name, className, as, ...rest } = props;
  // propsconst debug = debugMode(context)
  const iconName = `fe fe-${name}`;
  const iconClass = cx(iconName, className);
  const Component = as || 'span';
  return (
    <context.Consumer>
    {
      contextValue => (
        <Component className={iconClass}
                  {...(contextValue['debugMode'] && debugAttrs(props)) }
                  {...rest} />
      )
    }
    </context.Consumer>
  );
}
*/

export { Icon };
