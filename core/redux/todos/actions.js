/**
 * Actions
 */

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

/**
 * Action creators
 */

export function addTodo(text) {

  // Use actions following the flux-standard-action spec (https://github.com/acdlite/flux-standard-action)
  // Most of the redux ecosystem is interoperable with these actions
  // Moreover, always using objects as payload is a good convention
  // it's easier to pass more information, and it's convenient to be able to always assume in the reducer that you'll get an object
  // Lastly, if you're into generating your action creators (http://rackt.org/redux/docs/recipes/ReducingBoilerplate.html), it'll be simpler
  return {type: ADD_TODO, payload: {text}};
}

export function deleteTodo(id) {
  return {type: DELETE_TODO, payload: {id}};
}

export function editTodo(id, text) {
  return {type: EDIT_TODO, payload: {id, text}};
}

export function completeTodo(id) {
  return {type: COMPLETE_TODO, payload: {id}};
}

export function completeAll() {
  return {type: COMPLETE_ALL};
}

export function clearCompleted() {
  return {type: CLEAR_COMPLETED};
}
