/**
 * @fileoverview The reducer for the state's error tag. 
 */

const loadingReducerDefaultState = false;

export default (state = loadingReducerDefaultState, action) => {
  switch (action.type) {
    /**
     * Set the error tag to true.
     */
    case 'SET_ERROR':
      return true;
    /**
     * Set the error tag to false.
     */
    case 'REMOVE_ERROR':
      return false;
    default:
      return state;
  }
}