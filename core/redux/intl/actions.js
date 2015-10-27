/**
 * Actions
 */

 export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

/**
 * Action creators
 */

 export function selectLanguage(locale = 'en') {
   return {type: SELECT_LANGUAGE, locale};
 }
