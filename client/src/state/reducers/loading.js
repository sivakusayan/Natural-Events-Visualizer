import { START_LOADING, DONE_LOADING } from '../actionTypes/loadingActionTypes';

const loadingDefaultState = true;

export default (state = loadingDefaultState, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case DONE_LOADING:
      return false;
    default:
      return state;
  }
};
