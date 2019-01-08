import React from 'react';
import { cx } from 'emotion';
// import { Button } from './Button';
// import MODIFIERS from './Modifiers';

const Table = props => {
  const { children, className, ...rest } = props;
  const tableClass = cx('table', className);
  return (
    <table className={tableClass} {...rest}>
      {children}
    </table>
  );
};

// const NavbarNav = ({ children }) => <nav className="navbar-nav">{children}</nav>;

// const NavbarBrand = props => {
//   const { children } = props;
//   return (
//     <a className="navbar-brand" {...props}>
//       {children}
//     </a>
//   );
// };

// const NavbarCollapse = props => {
//   const { children, className = ' ', ...rest } = props;
//   const NavbarCollapseClass = `collapse navbar-collapse ${className}`;
//   return (
//     <div className={NavbarCollapseClass} {...rest}>
//       {children}
//     </div>
//   );
// };

// const NavbarToggle = props => (
//   <Button className="navbar-toggler" {...props}>
//     <span className="navbar-toggler-icon" />
//   </Button>
// );

// const NavbarText = ({ children }) => <span className="navbar-text">{children}</span>;

// Navbar.Nav = NavbarNav;
// Navbar.Brand = NavbarBrand;
// Navbar.Text = NavbarText;
// Navbar.Collapse = NavbarCollapse;
// Navbar.Toggle = NavbarToggle;

export { Table };
