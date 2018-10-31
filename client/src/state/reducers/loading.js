/**
 * @fileoverview The reducer for the state's loading field.
 */

import { START_LOADING, DONE_LOADING } from '../actionTypes/loadingActionTypes';

const loadingReducerDefaultState = true;

export default (state = loadingReducerDefaultState, action) => {
  switch (action.type) {
    /**
     * Set the loading tag to true.
     */
    case START_LOADING:
      return true;
    /**
     * Set the loading tag to false.
     */
    case DONE_LOADING:
      return false;
    default:
      return state;
  }
};
