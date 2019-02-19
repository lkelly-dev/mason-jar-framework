import React, { useContext } from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Breadcrumb = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const breadcrumbClass = cx('breadcrumb', className);
  return (
    <div className={breadcrumbClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const BreadcrumbItem = props => {
  const { context, children, status, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const breadcrumbStatus = MODIFIERS.BREADCRUMB[status] ? `${status}` : null;
  const breadcrumbClass = cx('breadcrumb-item', breadcrumbStatus, className);
  return (
    <div className={breadcrumbClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb, BreadcrumbItem };
