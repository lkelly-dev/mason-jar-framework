import React, { useContext } from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';
import { debugAttrs, debugMode } from '../utils/debugging';

const Avatar = props => {
  const { context, children, size, status, className, ...rest } = props;
  const c = (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const avatarSize = MODIFIERS.SIZE[size] ? `avatar-${size}` : null;
  const avatarStatus = MODIFIERS.STATUS[status] ? `avatar-${status}` : null;
  const avatarClass = cx('avatar', avatarSize, avatarStatus, className);
  return (
    <div className={avatarClass}
      {...(debug) ? debugAttrs(props) : null}
      {...rest}>
      {children}
    </div>
  );
};

const AvatarImage = props => {
  const { context, shape, alt, className, ...rest } = props;
  const c = (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const avatarImgShape = MODIFIERS.SHAPE[shape] || null;
  const avatarImgClass = cx('avatar-img', avatarImgShape, className);
  return <img className={avatarImgClass} alt={alt || ''}
              {...(debug) ? debugAttrs(props) : null}
              {...rest} />;
};

const AvatarTitle = props => {
  const { context, children, shape, className, ...rest } = props;
  const c = (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const avatarTitleShape = MODIFIERS.SHAPE[shape] || null;
  const avatarTitleClass = cx('avatar-title', avatarTitleShape, className);
  return (
    <span className={avatarTitleClass}
      {...(debug) ? debugAttrs(props) : null}
      {...rest}>
      {children}
    </span>
  );
};

Avatar.Image = AvatarImage;
Avatar.Title = AvatarTitle;

export { Avatar, AvatarImage, AvatarTitle };
