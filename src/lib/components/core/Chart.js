import React from 'react';
import { cx } from 'emotion';

const Chart = props => {
  const { children, className, ...rest } = props;
  const chartClass = cx('chart', className);
  return (
    <div className={chartClass} {...rest}>
      {children}
    </div>
  );
};

const ChartCanvas = props => {
  const { className, ...rest } = props;
  const chartClass = cx('chart-canvas', className);
  return <chart className={chartClass} {...rest} />;
};

Chart.Canvas = ChartCanvas;

export { Chart, ChartCanvas };
