import React from 'react';
import { cx } from 'emotion';

const Header = props => {
  const { children, className, ...rest } = props;
  const headerClass = cx('header', className);
  return (
    <div className={headerClass} {...rest}>
      {children}
    </div>
  );
};

const HeaderBody = props => {
  const { children, className, ...rest } = props;
  const headerBodyClass = cx('header-body', className);
  return (
    <div className={headerBodyClass} {...rest}>
      {children}
    </div>
  );
};

const HeaderPretitle = props => {
  const { children, className, as, ...rest } = props;
  const headerTitleClass = cx('header-pretitle', className);
  const Component = as || 'h6';
  return (
    <Component className={headerTitleClass} {...rest}>
      {children}
    </Component>
  );
};

const HeaderSubtitle = props => {
  const { children, className, as, ...rest } = props;
  const headerTitleClass = cx('header-subtitle', className);
  const Component = as || 'h6';
  return (
    <Component className={headerTitleClass} {...rest}>
      {children}
    </Component>
  );
};

const HeaderTitle = props => {
  const { children, className, as, ...rest } = props;
  const headerTitleClass = cx('header-title', className);
  const Component = as || 'h1';
  return (
    <Component className={headerTitleClass} {...rest}>
      {children}
    </Component>
  );
};

Header.Body = HeaderBody;
Header.Pretitle = HeaderPretitle;
Header.Subtitle = HeaderSubtitle;
Header.Title = HeaderTitle;

export { Header, HeaderBody, HeaderPretitle, HeaderSubtitle, HeaderTitle };
