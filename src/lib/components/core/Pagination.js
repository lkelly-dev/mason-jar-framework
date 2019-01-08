import React from 'react';
import { cx } from 'emotion';

const Pagination = props => {
  const { children, className, ...rest } = props;
  const paginationClass = cx('card', className);
  return (
    <ul className={paginationClass} {...rest}>
      {children}
    </ul>
  );
};

const PaginationItem = props => {
  const { children, className, ...rest } = props;
  const paginationClass = cx('card', className);
  return (
    <li className={paginationClass} {...rest}>
      {children}
    </li>
  );
};

const PaginationLink = props => {
  const { children, className, as, ...rest } = props;
  const paginationClass = cx('page-link', className);
  const Component = as || 'a';
  return (
    <Component className={paginationClass} {...rest}>
      {children}
    </Component>
  );
};

Pagination.Item = PaginationItem;
Pagination.Link = PaginationLink;

export { Pagination, PaginationItem, PaginationLink };
