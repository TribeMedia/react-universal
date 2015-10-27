/**
 * This middleware works in a similar manner to redux-thunk,
 * it allows you to `inject` some predefined services to your
 * action creators which eliminate platform-specific dependencies
 */
export default function injectDependencies(dependencies = {}) {
  return ({dispatch, getState}) => next => action =>
    typeof action === 'function' ?
      dispatch(action({...dependencies, getState})) :
      next(action);
}
