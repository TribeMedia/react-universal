import configureCoreStore from '../../../core/redux/configureStore';
import * as storage from './storage';
import fetch from 'isomorphic-fetch';

// We are using isomorphic-fetch just in case one
// plays with server-side rendering
const dependencies = {fetch};

const middlewares = [storage.middleware];

// Because web is older and we have better tooling, let's plug in some
// Redux time-machine goodies here
export default function configureStore() {
  let enhancers = [];

  if (process.env.NODE_ENV !== 'production') {
    enhancers = enhancers.concat(loadDevEnhancers());
  }

  return configureCoreStore({middlewares, enhancers, dependencies});
}

// Function to load dev-only enhancers
// Note we use `require` here so it does not break
// in production, where we do not need it at all
function loadDevEnhancers() {
  const {persistState} = require('redux-devtools');
  const DevTools = require('../ui/containers/DevTools');

  return [
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ];
}
