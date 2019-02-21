import React, { useContext } from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Alert = function (props) {
  const { children, color, className, context } = props;
  //FIXME: Expression can be simplified with binary operator
  //FIXME: create function that encapsulates logic and use it where we need debug
  /*
    const getDebug = context => {
      put logic here
    }

    const debug = getDebug(context)
   */
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const alertColor = MODIFIERS.COLOR[color] ? `alert-${color}` : null;
  const alertClass = cx('alert', alertColor, className);
  return (
    <div role="alert" className={alertClass}
         // FIXME: expression can be simplified
         //{...(debug && debugAttrs(props))}
         {...(debug) ? debugAttrs(props): null}
    >
      {children}
    </div>
  );
};

const AlertLink = props => {
  const { children, className, context, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const alertLinkClass = cx('alert-link', className);
  return (
    <a className={alertLinkClass}
       {...(debug) ? debugAttrs(props): null}
       {...rest}
    >
      {children}
    </a>
  );
};

const AlertHeading = props => {
  const { children, className, context, ...restProps } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const alertHeadingClass = cx('alert-heading', className);
  return (
    <h4 className={alertHeadingClass}
        {...(debug) ? debugAttrs(props): null}
        {...restProps}>
      {children}
    </h4>
  );
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export { Alert, AlertLink, AlertHeading };
