import React, { useContext } from 'react';
import { cx } from 'emotion';
import { debugAttrs, debugMode } from '../utils/debugging';

const Chart = props => {
  const { context, children, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const chartClass = cx('chart', className);
  return (
    <div className={chartClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest}>
      {children}
    </div>
  );
};

const ChartCanvas = props => {
  const { context, className, ...rest } = props;
  const c =  (context) ? useContext(context) : null;
  const debug = debugMode(c)
  const chartClass = cx('chart-canvas', className);
  return (
    <canvas className={chartClass}
      {...(debug) ? debugAttrs(props): null}
      {...rest} />
  );
};

Chart.Canvas = ChartCanvas;

export { Chart, ChartCanvas };
