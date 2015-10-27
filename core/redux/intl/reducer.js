import {SELECT_LANGUAGE} from './actions';
import * as languages from '../../i18n';

const initialState = {
  availableLanguages: ['en', 'pl'],
  selectedLanguage: 'en',
  msg: languages['en']
};

export default function intlReducer(state = initialState, action) {
  switch (action.type) {

    case SELECT_LANGUAGE: {
      const {locale} = action;
      if (state.availableLanguages.indexOf(locale) === -1) {
        return state;
      }
      return {...state, selectedLanguage: locale, msg: languages[locale]};
    }

  }

  return state;
}
