import React from 'react';
import { cx } from 'emotion';

const List = props => {
  const { children, className, ...rest } = props;
  const listClass = cx('list-group', className);
  return (
    <div className={listClass} {...rest}>
      {children}
    </div>
  );
};

const ListItem = props => {
  const { children, className, ...rest } = props;
  const listClass = cx('list-group-item', className);
  return (
    <div className={listClass} {...rest}>
      {children}
    </div>
  );
};

List.Item = ListItem;

export { List, ListItem };
