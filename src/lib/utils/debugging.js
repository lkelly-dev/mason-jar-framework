// FIXME: function can be simplified
//const createPropName = oldProp => oldProp.slice().replace(/\W+/g, '-');
const createPropName = (oldProp) => {
  let newProp = oldProp.slice();
  return newProp.replace(/\W+/g, '-');
}

const debugMode = (context) => (
  // FIXME: This statement can be simplified
  // Context exists AND context.debugMode exists AND context.debugMode is TRUE
  // SUGGESTION:
  // context && context['debugMode']
  (context && context['debugMode'] !== null && context.debugMode === true)
    ? true : false
)

const debugAttrs = ({context, children, ...attrs}) => Object.keys(attrs).reduce((result,key)=>{
  result[`data-${createPropName(key)}`] = attrs[key];
  return result;
}, {});

export { debugAttrs, debugMode };
