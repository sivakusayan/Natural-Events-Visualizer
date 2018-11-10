import { SET_ERROR, REMOVE_ERROR } from '../actionTypes/errorActionTypes';

const loadingDefaultState = false;

export default (state = loadingDefaultState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return true;
    case REMOVE_ERROR:
      return false;
    default:
      return state;
  }
}