import mapValues from 'lodash.mapvalues';
import transform from 'lodash.transform';
import {bindActionCreators} from 'redux';

function onlyFunctions(actions) {
  return transform(actions, (filteredActions, value, prop) => {
    if (typeof value === 'function') filteredActions[prop] = value;
  });
}

// Iterate over passed array of actions
// and
// 1. Filter out constants because we have them along the files
// 2. Bind the rest
// typical features object will look like:
// {
//   todos: {...}
// }
export default function bindActionsToDispatch(features) {
  return dispatch => ({
    actions: mapValues(features, actions => bindActionCreators(onlyFunctions(actions), dispatch))
  });
}
