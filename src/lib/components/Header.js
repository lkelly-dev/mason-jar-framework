import React from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Header = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const headerClass = cx('header', className);
  return (
    <div className={headerClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const HeaderBody = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const headerBodyClass = cx('header-body', className);
  return (
    <div className={headerBodyClass}
         {...(debug && debugAttrs(props)) }
         {...rest}>
      {children}
    </div>
  );
};

const HeaderPretitle = props => {
  const { context, children, className, as, ...rest } = props;
  const debug = debugMode(context)
  const headerTitleClass = cx('header-pretitle', className);
  const Component = as || 'h6';
  return (
    <Component className={headerTitleClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </Component>
  );
};

const HeaderSubtitle = props => {
  const { context, children, className, as, ...rest } = props;
  const debug = debugMode(context)
  const headerTitleClass = cx('header-subtitle', className);
  const Component = as || 'h6';
  return (
    <Component className={headerTitleClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </Component>
  );
};

const HeaderTitle = props => {
  const { context, children, className, as, ...rest } = props;
  const debug = debugMode(context)
  const headerTitleClass = cx('header-title', className);
  const Component = as || 'h1';
  return (
    <Component className={headerTitleClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </Component>
  );
};

Header.Body = HeaderBody;
Header.Pretitle = HeaderPretitle;
Header.Subtitle = HeaderSubtitle;
Header.Title = HeaderTitle;

export { Header, HeaderBody, HeaderPretitle, HeaderSubtitle, HeaderTitle };
