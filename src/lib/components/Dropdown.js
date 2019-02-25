import React from 'react';
import { cx } from 'emotion';
import { Button } from './Button';
import { debugAttrs, debugMode } from '../utils/debugging';

const Dropdown = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const dropdownClass = cx('dropdown', className);
  return (
    <div className={dropdownClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const DropdownToggle = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const dropdownToggleClass = cx('dropdown-toggle', className);
  return (
    <Button
      className={dropdownToggleClass}
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      {...(debug && debugAttrs(props)) }
      {...rest}
    >
      {children}
    </Button>
  );
};

const DropdownFeatherToggle = props => {
  const { context, className, ...rest } = props;
  const debug = debugMode(context)
  const dropdownToggleClass = cx('dropdown-ellipses', 'dropdown-toggle', className);
  return (
    <Button
      type="button"
      className={dropdownToggleClass}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style={{ border: 'none', cursor: 'pointer' }}
      {...(debug && debugAttrs(props)) }
      {...rest} >
      <i className="fe fe-more-vertical" />
    </Button>
  );
};

const DropdownMenu = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const dropdownMenuClass = cx('dropdown-menu', className);
  return (
    <div className={dropdownMenuClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const DropdownItem = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const dropdownItemClass = cx('dropdown-item', className);
  return (
    <div className={dropdownItemClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const DropdownCard = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const dropdownItemClass = cx('dropdown-menu', 'dropdown-menu-card', className);
  return (
    <div className={dropdownItemClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.FeatherToggle = DropdownFeatherToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Card = DropdownCard;

export {
  Dropdown,
  DropdownToggle,
  DropdownFeatherToggle,
  DropdownMenu,
  DropdownItem,
  DropdownCard,
};
