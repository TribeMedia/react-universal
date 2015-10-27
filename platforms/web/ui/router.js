import React from 'react';
import {createHistory} from 'history';
import {Router, Route} from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Todos from './containers/Todos';

const history = createHistory();

const routes = (
  <Router history={history}>
    <Route component={App}>
      <Route component={Home} path='/' />
      <Route component={Todos} path='/todos' />
    </Route>
  </Router>
);

export default routes;
