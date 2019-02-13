import React from 'react';

const Image = props => {
  const { className, alt, aria, ...rest } = props;
  return <img className={className} {...rest} alt={alt} aria-label={aria} />;
};

export { Image };
