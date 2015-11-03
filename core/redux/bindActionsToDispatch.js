import mapValues from 'lodash.mapvalues';
import transform from 'lodash.transform';
import {bindActionCreators} from 'redux';

import * as todos from './todos/actions';
import * as intl from './intl/actions';

function onlyFunctions(actions) {
  return transform(actions, (filteredActions, value, prop) => {
    if (typeof value === 'function') filteredActions[prop] = value;
  });
}

// Iterate over passed array of actions
// and
// 1. Filter out constants because we have them along the files
// 2. Bind the rest
// typical return object will look like:
// {
//   todos: {addTodo: function() {}}
// }
// call it this.props.actions.todos.addTodo();
export default function bindActionsToDispatch(features) {
  const actionsToBind = {todos, intl, ...features};
  return dispatch => ({
    actions: mapValues(actionsToBind, actions => bindActionCreators(onlyFunctions(actions), dispatch))
  });
}
