import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import MODIFIERS from './Modifiers';

const Progress = props => {
  const { children, className, currentValue, min, max, size, ...rest } = props;
  const progressSize = MODIFIERS.SIZE[size] ? `progress-${size}` : null;
  const progressClass = cx('progress', progressSize, className);
  return (
    <div className={progressClass} {...rest}>
      <div
        style={{ width: `${currentValue}%` }}
        className="progress-bar"
        role="progressbar"
        aria-valuenow={currentValue}
        aria-valuemin={min || 0}
        aria-valuemax={max || 100}
      />
    </div>
  );
};

export { Progress };

Progress.propTypes = {
  currentValue: PropTypes.number.isRequired,
};

//  min: PropTypes.number,
// max: PropTypes.number,
