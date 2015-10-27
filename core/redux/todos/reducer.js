import * as actions from './actions';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export default function todos(state = initialState, action) {
  switch (action.type) {

    case actions.ADD_TODO:
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text
      }, ...state];

    case actions.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case actions.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, {text: action.text}) :
          todo
      );

    case actions.COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, {completed: !todo.completed}) :
          todo
      );

    case actions.COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));

    case actions.CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
  }

  return state;
}
