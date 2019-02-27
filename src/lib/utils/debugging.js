import { useContext } from 'react';

const createPropName = oldProp => oldProp.slice().replace(/\W+/g, '-');

const debugMode = (context) => {

  console.group();
  console.log('mason-jar debugMode context: ', context);
  console.log('context.debugMode :', context.debugMode);
  console.log('context[\'debugMode\'] :', context['debugMode']);

  var c = (context) ? useContext(context): null;

  console.log('result of useContext(context): ', c)
  console.log('return value :', (c && c['debugMode']))

  console.groupEnd();

  return (c && c['debugMode']);
}

const debugAttrs = ({context, children, ...attrs}) => Object.keys(attrs).reduce((result,key)=>{
  result[`data-${createPropName(key)}`] = attrs[key];
  return result;
}, {});

export { debugAttrs, debugMode };
