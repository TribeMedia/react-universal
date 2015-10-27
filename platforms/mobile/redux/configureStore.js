import configureCoreStore from '../../../core/redux/configureStore';
import * as storage from './storage';
import device from './device/reducer';

// Every platform can configure store on its own passing custom
// middlewares, reducers and dependencies
const reducers = {device};

const dependencies = {fetch: window.fetch};

const middlewares = [
  storage.middleware
];

export default function configureStore() {
  return configureCoreStore({middlewares, reducers, dependencies});
}
