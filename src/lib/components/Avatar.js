import React from 'react';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Avatar = props => {
  const { children, size, status, className, ...rest } = props;
  const avatarSize = MODIFIERS.SIZE[size] ? `avatar-${size}` : null;
  const avatarStatus = MODIFIERS.STATUS[status] ? `avatar-${status}` : null;
  const avatarClass = cx('avatar', avatarSize, avatarStatus, className);
  return (
    <div className={avatarClass} {...rest}>
      {children}
    </div>
  );
};

const AvatarImage = props => {
  const { shape, alt, className, ...rest } = props;
  const avatarImgShape = MODIFIERS.SHAPE[shape] || null;
  const avatarImgClass = cx('avatar-img', avatarImgShape, className);
  return <img className={avatarImgClass} alt={alt || ''} {...rest} />;
};

const AvatarTitle = props => {
  const { children, shape, className, ...rest } = props;
  const avatarTitleShape = MODIFIERS.SHAPE[shape] || null;
  const avatarTitleClass = cx('avatar-title', avatarTitleShape, className);
  return (
    <span className={avatarTitleClass} {...rest}>
      {children}
    </span>
  );
};

Avatar.Image = AvatarImage;
Avatar.Title = AvatarTitle;

export { Avatar, AvatarImage, AvatarTitle };
