import storage from 'redux-storage';
import createEngine from 'redux-storage/engines/reactNativeAsyncStorage';

export const engine = createEngine('our-state-key');

export const middleware = storage.createMiddleware(engine);

export const load = storage.createLoader(engine);
