import React from 'react';
import { cx } from 'emotion';

const Card = props => {
  const { children, className, ...rest } = props;
  const cardClass = cx('card', className);
  return (
    <div className={cardClass} {...rest}>
      {children}
    </div>
  );
};

const CardTitle = props => {
  const { children, className, as, ...rest } = props;
  const cardTitleClass = cx('card-title', 'mb-0', className);
  const Component = as || 'h2';
  return (
    <Component className={cardTitleClass} {...rest}>
      {children}
    </Component>
  );
};

const CardHeader = props => {
  const { children, className, ...rest } = props;
  const headerClass = cx('card-header', className);
  return (
    <div className={headerClass} {...rest}>
      {children}
    </div>
  );
};

const CardBody = props => {
  const { children, className, ...rest } = props;
  const cardBodyClass = cx('card-body', className);
  return (
    <div className={cardBodyClass} {...rest}>
      {children}
    </div>
  );
};

const CardText = props => {
  const { children, className, ...rest } = props;
  const cardTextClass = cx('card-text', className);
  return (
    <span className={cardTextClass} {...rest}>
      {children}
    </span>
  );
};

const CardDropdown = props => {
  const { children, className, ...rest } = props;
  const cardDropdownClass = cx('dropdown', 'card-dropdown', className);
  return (
    <div className={cardDropdownClass} {...rest}>
      {children}
    </div>
  );
};

const CardAvatar = props => {
  const { children, className, ...rest } = props;
  const cardAvatarClass = cx('card-avatar', 'avatar', className);
  return (
    <div className={cardAvatarClass} {...rest}>
      {children}
    </div>
  );
};

const CardTable = props => {
  const { children, className, ...rest } = props;
  const cardTableClass = cx('card-table', className);
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
