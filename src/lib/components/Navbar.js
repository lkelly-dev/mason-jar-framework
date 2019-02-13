import React from 'react';
import { cx } from 'emotion';
import { Button } from './Button';
import MODIFIERS from './Modifiers';

const Navbar = props => {
  const { children, expand, color, fixed, vertical, className, ...rest } = props;
  const navbarColor = MODIFIERS.COLOR[color] ? `navbar-${color}` : null;
  const expandSize = MODIFIERS.SIZE[expand] ? `navbar-expand-${expand}` : null;
  const navbarFixed = MODIFIERS.FIXED[fixed] ? `fixed-${fixed}` : null;
  const navbarVertical = MODIFIERS.ORIENTATION[vertical] ? 'navbar-vertical' : null;
  const navbarClass = cx('navbar', navbarColor, expandSize, navbarFixed, navbarVertical, className);
  return (
    <nav className={navbarClass} {...rest}>
      {children}
    </nav>
  );
};

const NavbarNav = props => {
  const { children, className, ...rest } = props;
  const navbarClass = cx('navbar-nav', className);
  return (
    <nav className={navbarClass} {...rest}>
      {children}
    </nav>
  );
};

const NavbarBrand = props => {
  const { children, className, ...rest } = props;
  const navBrandClass = cx('navbar-brand', className);
  return (
    <a className={navBrandClass} {...rest}>
      {children}
    </a>
  );
};

const NavbarCollapse = props => {
  const { children, className, ...rest } = props;
  const navbarCollapseClass = cx('collapse', 'navbar-collapse', className);
  return (
    <div className={navbarCollapseClass} {...rest}>
      {children}
    </div>
  );
};

const NavbarToggle = props => {
  const { className, ...rest } = props;
  const togglerClass = cx('navbar-toggler', className);
  return (
    <Button className={togglerClass} {...rest}>
      <span className="navbar-toggler-icon" />
    </Button>
  );
};

const NavbarText = props => {
  const { children, className, ...rest } = props;
  const navbarClass = cx('navbar-text', className);
  return (
    <span className={navbarClass} {...rest}>
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
