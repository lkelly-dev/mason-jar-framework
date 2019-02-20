import React, { useContext } from 'react';
import { cx } from 'emotion';
import { Button } from './Button';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Navbar = props => {
  const { context, children, expand, color, fixed, vertical, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navbarColor = MODIFIERS.COLOR[color] ? `navbar-${color}` : null;
  const expandSize = MODIFIERS.SIZE[expand] ? `navbar-expand-${expand}` : null;
  const navbarFixed = MODIFIERS.FIXED[fixed] ? `fixed-${fixed}` : null;
  const navbarVertical = vertical ? 'navbar-vertical' : null;
  const navbarClass = cx('navbar', navbarColor, expandSize, navbarFixed, navbarVertical, className);
  return (
    <nav className={navbarClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </nav>
  );
};

const NavbarNav = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navbarClass = cx('navbar-nav', className);
  return (
    <nav className={navbarClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </nav>
  );
};

const NavbarBrand = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navBrandClass = cx('navbar-brand', className);
  return (
    <a className={navBrandClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </a>
  );
};

const NavbarCollapse = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navbarCollapseClass = cx('collapse', 'navbar-collapse', className);
  return (
    <div className={navbarCollapseClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const NavbarToggle = props => {
  const { context, className, ...rest } = props;
  const togglerClass = cx('navbar-toggler', className);
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  return (
    <Button className={togglerClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      <span className="navbar-toggler-icon" />
    </Button>
  );
};

const NavbarText = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const navbarClass = cx('navbar-text', className);
  return (
    <span className={navbarClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </span>
  );
};

Navbar.Nav = NavbarNav;
Navbar.Brand = NavbarBrand;
Navbar.Text = NavbarText;
Navbar.Collapse = NavbarCollapse;
Navbar.Toggle = NavbarToggle;

export { Navbar, NavbarNav, NavbarBrand, NavbarText, NavbarCollapse, NavbarToggle };
