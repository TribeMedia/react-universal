/* global global */

import React, {AppRegistry} from 'react-native';

// Make browser packages work
global.self = global;
global.Promise = require('bluebird');

// Polyfill intl
import 'intl';

// Load Redux provider and our store
import {Provider} from 'react-redux/native';
import configureStore from './redux/configureStore';

const store = configureStore();

// Entry-point, App
import App from './ui/containers/App';

// This component will go to core once react-redux@4.x works with native
// and wrapper function can be removed
class MainComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mobile', () => MainComponent);
