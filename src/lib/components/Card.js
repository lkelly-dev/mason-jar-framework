import React, { useContext } from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Card = props => {
  const { context, children, className, ...rest } = props;
  console.log('card context: ', context)
  var c = (context) ? useContext(context): null;
  console.log('context: ', context)
  console.log('c: ', c)
  const debug = (c && c['debugMode'])
  console.log('debug: ', debug)
  const cardClass = cx('card', className);
  return (
    <div className={cardClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const CardTitle = props => {
  const { context, children, className, as, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const cardTitleClass = cx('card-title', 'mb-0', className);
  const Component = as || 'h2';
  return (
    <Component className={cardTitleClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </Component>
  );
};

const CardHeader = props => {
  const { context, children, className, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const headerClass = cx('card-header', className);
  return (
    <div className={headerClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const CardBody = props => {
  const { context, children, className, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const cardBodyClass = cx('card-body', className);
  return (
    <div className={cardBodyClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const CardText = props => {
  const { context, children, className, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const cardTextClass = cx('card-text', className);
  return (
    <span className={cardTextClass} 
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </span>
  );
};

const CardDropdown = props => {
  const { context, children, className, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const cardDropdownClass = cx('dropdown', 'card-dropdown', className);
  return (
    <div className={cardDropdownClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const CardAvatar = props => {
  const { context, children, className, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const cardAvatarClass = cx('card-avatar', 'avatar', className);
  return (
    <div className={cardAvatarClass} 
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const CardTable = props => {
  const { context, children, className, ...rest } = props;
  var c = (context) ? useContext(context): null;
  const debug = (c && c['debugMode'])
  const cardTableClass = cx('card-table', className);
  return (
    <table className={cardTableClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </table>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Text = CardText;
Card.Title = CardTitle;
Card.Dropdown = CardDropdown;
Card.Avatar = CardAvatar;
Card.Table = CardTable;

export { Card, CardHeader, CardBody, CardText, CardTitle, CardDropdown, CardAvatar, CardTable };
