import { useContext } from 'react';

const createPropName = oldProp => oldProp.slice().replace(/\W+/g, '-');

const debugMode = (context) => {
  var c = (context) ? useContext(context): false;
  return c;
}

const debugAttrs = ({context, children, ...attrs}) => Object.keys(attrs).reduce((result,key)=>{
  result[`data-${createPropName(key)}`] = attrs[key];
  return result;
}, {});

export { debugAttrs, debugMode };
