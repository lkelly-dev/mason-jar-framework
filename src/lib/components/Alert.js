import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Alert = props => {
  const { children, color, className, ...rest } = props;
  const alertColor = MODIFIERS.COLOR[color] ? `alert-${color}` : null;
  const alertClass = cx('alert', alertColor, className);
  return (
    <div role="alert" className={alertClass} {...rest}>
      {children}
    </div>
  );
};

const AlertLink = props => {
  const { children, className, ...rest } = props;
  const alertLinkClass = cx('alert-link', className);
  return (
    <a className={alertLinkClass} {...rest}>
      {children}
    </a>
  );
};

const AlertHeading = props => {
  const { children, className, ...restProps } = props;
  const alertHeadingClass = cx('alert-heading', className);
  return (
    <h4 className={alertHeadingClass} {...restProps}>
      {children}
    </h4>
  );
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export { Alert, AlertLink, AlertHeading };
