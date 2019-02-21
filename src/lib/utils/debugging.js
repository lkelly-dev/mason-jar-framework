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

const debugAttrs = (attrs) => {
  const {context, children, ...debugAttrs} = attrs;
  const result = {},
        valsArray = Object.values(debugAttrs),
        keysArray = Object.keys(debugAttrs).map(val => createPropName(val));
  keysArray.forEach((val, i)=>{
    // create object with keys ie data-whatever
    // if thing is object stringify it
    // if not, return as is (cause is primitive)
    //result[`data-${val}`] = (typeof valsArray[i] === 'object' ) ? JSON.stringify(valsArray[i]) : valsArray[i];
    result[`data-${val}`] = (typeof valsArray[i] === 'object' ) ? JSON.stringify(valsArray[i]) : valsArray[i];
  })
  return result;
}

export { debugAttrs, debugMode };
