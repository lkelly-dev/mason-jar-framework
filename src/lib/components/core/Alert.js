import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Alert = props => {
  const { children, color, className } = props;
  const alertColor = MODIFIERS.COLOR[color] ? `alert-${color}` : null;
  const alertClass = cx('alert', alertColor, className);
  return (
    <div role="alert" className={alertClass}>
      {children}
    </div>
  );
};

const AlertLink = props => {
  const { children, className } = props;
  const alertLinkClass = cx('alert-link', className);
  return (
    <a className={alertLinkClass} {...props}>
      {children}
    </a>
  );
};

const AlertHeading = props => {
  const { children, className } = props;
  const alertHeadingClass = cx('alert-heading', className);
  return (
    <h4 className={alertHeadingClass} {...props}>
      {children}
    </h4>
  );
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export { Alert, AlertLink, AlertHeading };
