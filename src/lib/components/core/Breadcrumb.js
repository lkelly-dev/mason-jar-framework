import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Breadcrumb = props => {
  const { children, className, ...rest } = props;
  const breadcrumbClass = cx('breadcrumb', className);
  return (
    <div className={breadcrumbClass} {...rest}>
      {children}
    </div>
  );
};

const BreadcrumbItem = props => {
  const { children, status, className, ...rest } = props;
  const breadcrumbStatus = MODIFIERS.BREADCRUMB[status] ? `${status}` : null;
  const breadcrumbClass = cx('breadcrumb-item', breadcrumbStatus, className);
  return (
    <div className={breadcrumbClass} {...rest}>
      {children}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb, BreadcrumbItem };
