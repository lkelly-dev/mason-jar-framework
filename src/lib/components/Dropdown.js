import React from 'react';
import { cx } from 'emotion';
import { Button } from './Button';

const Dropdown = props => {
  const { children, className, ...rest } = props;
  const dropdownClass = cx('dropdown', className);
  return (
    <div className={dropdownClass} {...rest}>
      {children}
    </div>
  );
};

const DropdownToggle = props => {
  const { children, className, ...rest } = props;
  const dropdownToggleClass = cx('dropdown-toggle', className);
  return (
    <Button
      className={dropdownToggleClass}
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      {...rest}
    >
      {children}
    </Button>
  );
};

const DropdownFeatherToggle = props => {
  const { className, ...rest } = props;
  const dropdownToggleClass = cx('dropdown-ellipses', 'dropdown-toggle', className);
  return (
    <Button
      type="button"
      className={dropdownToggleClass}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style={{ border: 'none', cursor: 'pointer' }}
      {...rest}
    >
      <i className="fe fe-more-vertical" />
    </Button>
  );
};

const DropdownMenu = props => {
  const { children, className, ...rest } = props;
  const dropdownMenuClass = cx('dropdown-menu', className);
  return (
    <div className={dropdownMenuClass} {...rest}>
      {children}
    </div>
  );
};

const DropdownItem = props => {
  const { children, className, ...rest } = props;
  const dropdownItemClass = cx('dropdown-item', className);
  return (
    <div className={dropdownItemClass} {...rest}>
      {children}
    </div>
  );
};

const DropdownCard = props => {
  const { children, className, ...rest } = props;
  const dropdownItemClass = cx('dropdown-menu', 'dropdown-menu-card', className);
  return (
    <div className={dropdownItemClass} {...rest}>
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
