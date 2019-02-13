import React from 'react';
import { css, cx } from 'emotion';
import { Dropdown } from './Dropdown';
import MODIFIERS from './Modifiers';

const NavLinkExtra = css`
  cursor: pointer;
`;

const Nav = props => {
  const { children, className, ...rest } = props;
  const navClass = cx('nav', className);
  return (
    <nav className={navClass} {...rest}>
      {children}
    </nav>
  );
};

const NavTab = props => {
  const { children, className, size, overflow, ...rest } = props;
  const navSize = MODIFIERS.SIZE[size] ? `nav-tabs-${size}` : null;
  const navOverflow = overflow ? 'nav-overflow' : null;
  const navClass = cx('nav', 'nav-tabs', navSize, navOverflow, className);
  return (
    <nav className={navClass} {...rest}>
      {children}
    </nav>
  );
};

const NavItem = props => {
  const { children, className, ...rest } = props;
  const navItemClass = cx('nav-item', className);
  return (
    <div className={navItemClass} {...rest}>
      {children}
    </div>
  );
};

const NavDropdown = props => {
  const { children, className, ...rest } = props;
  const navDropdownClass = cx('nav-item', 'dropdown', className);
  return (
    <Dropdown className={navDropdownClass} {...rest}>
      {children}
    </Dropdown>
  );
};

const NavLink = props => {
  const { children, className, as, active, ...rest } = props;
  const activeClass = active ? 'active' : null;
  const navLinkClass = cx('nav-link', activeClass, NavLinkExtra, className);
  const Component = as || 'div';
  return (
    <Component className={navLinkClass} {...rest}>
      {children}
    </Component>
  );
};

Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Dropdown = NavDropdown;

export { Nav, NavTab, NavItem, NavLink, NavDropdown };
