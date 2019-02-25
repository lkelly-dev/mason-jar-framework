import React from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Chart = props => {
  const { context, children, className, ...rest } = props;
  const debug = debugMode(context)
  const chartClass = cx('chart', className);
  return (
    <div className={chartClass}
      {...(debug && debugAttrs(props)) }
      {...rest}>
      {children}
    </div>
  );
};

const ChartCanvas = props => {
  const { context, className, ...rest } = props;
  const debug = debugMode(context)
  const chartClass = cx('chart-canvas', className);
  return (
    <canvas className={chartClass}
      {...(debug && debugAttrs(props)) }
      {...rest} />
  );
};

Chart.Canvas = ChartCanvas;

export { Chart, ChartCanvas };
