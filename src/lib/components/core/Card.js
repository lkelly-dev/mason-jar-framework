import React from 'react';
import { cx } from 'emotion';

const Card = props => {
  const { children, className, ...rest } = props;
  const cardClass = cx(className, 'card');
  return (
    <div className={cardClass} {...rest}>
      {children}
    </div>
  );
};

const CardTitle = props => {
  const { children, className, as, ...rest } = props;
  const cardTitleClass = cx(className, 'card-title', 'mb-0');
  const Component = as || 'h2';
  return (
    <Component className={cardTitleClass} {...rest}>
      {children}
    </Component>
  );
};

const CardHeader = props => {
  const { children, className, ...rest } = props;
  const headerClass = cx(className, 'card-header');
  return (
    <div className={headerClass} {...rest}>
      {children}
    </div>
  );
};

const CardBody = props => {
  const { children, className, ...rest } = props;
  const cardBodyClass = cx(className, 'card-body');
  return (
    <div className={cardBodyClass} {...rest}>
      {children}
    </div>
  );
};

const CardText = props => {
  const { children, className, ...rest } = props;
  const cardTextClass = cx(className, 'card-text');
  return (
    <span className={cardTextClass} {...rest}>
      {children}
    </span>
  );
};

const CardDropdown = props => {
  const { children, className, ...rest } = props;
  const cardDropdownClass = cx(className, 'dropdown', 'card-dropdown');
  return (
    <div className={cardDropdownClass} {...rest}>
      {children}
    </div>
  );
};

const CardAvatar = props => {
  const { children, className, ...rest } = props;
  const cardAvatarClass = cx(className, 'card-avatar', 'avatar');
  return (
    <div className={cardAvatarClass} {...rest}>
      {children}
    </div>
  );
};

// TODO: Test this
const CardTable = props => {
  const { children, className, ...rest } = props;
  const cardTableClass = cx(className, 'card-table');
  return (
    <table className={cardTableClass} {...rest}>
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
