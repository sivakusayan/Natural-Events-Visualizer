import { TOGGLE_MAIN_PAGE } from '../actionTypes/hideMainPage';

const hideMainPageDefaultState = false;

export default (state = hideMainPageDefaultState, action) => {
  switch (action.type) {
    case TOGGLE_MAIN_PAGE:
      return !state;
    default:
      return state;
  }
};
