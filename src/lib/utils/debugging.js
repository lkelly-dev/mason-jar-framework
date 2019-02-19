
const createPropName = (oldProp) => {
  let newProp = oldProp.slice();
  return newProp.replace(/\W+/g, '-').toLowerCase();
}

const debugMode = (context) => (
  (context && context['debugMode'] !== null && context.debugMode === true)
    ? true : false
)

const debugAttrs = (attrs) => {
  const {context, children, ...debugAttrs} = attrs;
  const result = {},
        valsArray = Object.values(debugAttrs),
        keysArray = Object.keys(debugAttrs).map(val => createPropName(val));
  keysArray.forEach((val, i)=>{
    result[`data-${val}`] = (typeof valsArray[i] === 'object' ) ? JSON.stringify(valsArray[i]) : valsArray[i];
  })
  return result;
}

export { debugAttrs, debugMode };
