import React, { useContext } from 'react';
import { css, cx } from 'emotion';
import { Dropdown } from './Dropdown';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const NavLinkExtra = css`
  cursor: pointer;
`;

const Nav = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navClass = cx('nav', className);
  return (
    <nav className={navClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </nav>
  );
};

const NavTab = props => {
  const { context, children, className, size, overflow, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navSize = MODIFIERS.SIZE[size] ? `nav-tabs-${size}` : null;
  const navOverflow = overflow ? 'nav-overflow' : null;
  const navClass = cx('nav', 'nav-tabs', navSize, navOverflow, className);
  return (
    <nav className={navClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </nav>
  );
};

const NavItem = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navItemClass = cx('nav-item', className);
  return (
    <div className={navItemClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const NavDropdown = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navDropdownClass = cx('nav-item', 'dropdown', className);
  return (
    <Dropdown className={navDropdownClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </Dropdown>
  );
};

const NavLink = props => {
  const { context, children, className, as, active, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const activeClass = active ? 'active' : null;
  const navLinkClass = cx('nav-link', activeClass, NavLinkExtra, className);
  const Component = as || 'div';
  return (
    <Component className={navLinkClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </Component>
  );
};

Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Dropdown = NavDropdown;

export { Nav, NavTab, NavItem, NavLink, NavDropdown };
