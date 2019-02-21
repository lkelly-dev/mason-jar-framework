import React, { useContext } from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const List = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const listClass = cx('list-group', className);
  return (
    <div className={listClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const ListItem = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const listClass = cx('list-group-item', className);
  return (
    <div className={listClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

List.Item = ListItem;

export { List, ListItem };
