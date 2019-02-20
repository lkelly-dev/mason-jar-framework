import React, { useContext } from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Pagination = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const paginationClass = cx('card', className);
  return (
    <ul className={paginationClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </ul>
  );
};

const PaginationItem = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const paginationClass = cx('card', className);
  return (
    <li className={paginationClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </li>
  );
};

const PaginationLink = props => {
  const { context, children, className, as, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const paginationClass = cx('page-link', className);
  const Component = as || 'a';
  return (
    <Component className={paginationClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </Component>
  );
};

Pagination.Item = PaginationItem;
Pagination.Link = PaginationLink;

export { Pagination, PaginationItem, PaginationLink };
