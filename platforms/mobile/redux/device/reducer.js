import * as actions from './actions';

const initialState = {
  isSideMenuOpen: false
};

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {

    case actions.TOGGLE_SIDE_MENU:
      return {...state, isSideMenuOpen: !state.isSideMenuOpen};

  }

  return state;
}
