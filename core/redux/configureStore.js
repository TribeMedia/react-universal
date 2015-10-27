import injectDependencies from './middlewares/createDependencies';
import promiseMiddleware from 'redux-promise-middleware';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';

// Load initial list of reducers
import todos from './todos/reducer';
import intl from './intl/reducer';

/**
 * Configure core store by passing some additional
 * middlewares and enhancers to it
 */
export default function configureStore({
  reducers = {},
  dependencies = {},
  enhancers = [],
  middlewares = [],
  initialState
}) {
  let coreMiddlewares = [
    injectDependencies(dependencies),
    promiseMiddleware()
  ];

  const finalCreateStore = compose(
    applyMiddleware(...coreMiddlewares, ...middlewares),
    ...enhancers
  )(createStore);

  const rootReducer = combineReducers({
    todos,
    intl,
    ...reducers
  });

  return finalCreateStore(rootReducer, initialState);
}
