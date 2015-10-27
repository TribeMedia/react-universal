import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

// Entry-point, App
import routes from './ui/router';

render(
  <Provider store={store}>
    <div>
      {routes}
      {maybeRenderDevTools()}
    </div>
  </Provider>,
  document.getElementById('root')
);

// Conditonally load dev tools, only in production mode
function maybeRenderDevTools() {
  if (process.env.NODE_ENV === 'production') return false;
  const DevTools = require('./ui/containers/DevTools');
  return <DevTools />;
}
