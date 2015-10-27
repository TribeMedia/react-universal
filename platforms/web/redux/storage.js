import storage from 'redux-storage';
import createEngine from 'redux-storage/engines/localStorage';

export const engine = createEngine('our-state-key');

export const middleware = storage.createMiddleware();

export const load = storage.createLoader(engine);
