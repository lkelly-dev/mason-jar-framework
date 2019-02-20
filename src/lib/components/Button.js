import React, { useContext } from 'react';
import { cx, css } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const ButtonOverride = css`
  -webkit-appearance: inherit !important;
  font-weight: bold;
  box-shadow: none !important;
`;

const Button = props => {
  const { context, children, color, outline, size, status, shape, className, as, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
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
    <Component type="button" className={buttonClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </Component>
  );
};

const ButtonGroup = props => {
  const { context, children, size, orientation, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const buttonGroupSize = MODIFIERS.SIZE[size] ? `btn-group-${size}` : null;
  const buttonGroupOrientation = MODIFIERS.ORIENTATION[orientation] ? `btn-group-${orientation}` : null;
  const buttonGroupClass = cx('btn-group', buttonGroupSize, buttonGroupOrientation, className);
  return (
    <div className={buttonGroupClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

Button.Group = ButtonGroup;

export { Button, ButtonGroup };
