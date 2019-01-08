import React from 'react';
import { cx, css } from 'emotion';
import MODIFIERS from './Modifiers';

const ButtonOverride = css`
  -webkit-appearance: inherit !important;
  font-weight: bold;
  box-shadow: none !important;
`;

const Button = props => {
  const { children, color, outline, size, status, shape, className, as, ...rest } = props;
  const buttonColor = MODIFIERS.COLOR[color] ? `btn-${color}` : null;
  const outlineColor = MODIFIERS.COLOR[outline] ? `btn-outline-${outline}` : null;
  const buttonSize = MODIFIERS.SIZE[size] ? `btn-${size}` : null;
  const buttonShape = MODIFIERS.SHAPE[shape] ? `btn-${shape}` : null;
  const buttonStatus = MODIFIERS.BUTTON[status] ? `${status}` : null;
  const Component = as || 'button';
  const buttonClass = cx(
    'btn',
    buttonColor,
    outlineColor,
    buttonSize,
    buttonShape,
    buttonStatus,
    ButtonOverride,
    className,
  );
  return (
    <Component type="button" className={buttonClass} {...rest}>
      {children}
    </Component>
  );
};

const ButtonGroup = props => {
  const { children, size, orientation, className, ...rest } = props;
  const buttonGroupSize = MODIFIERS.SIZE[size] ? `btn-group-${size}` : null;
  const buttonGroupOrientation = MODIFIERS.SIZE[orientation] ? `btn-group-${orientation}` : null;
  const buttonGroupClass = cx('btn-group', buttonGroupSize, buttonGroupOrientation, className);
  return (
    <div className={buttonGroupClass} {...rest}>
      {children}
    </div>
  );
};

Button.Group = ButtonGroup;

export { Button, ButtonGroup };
