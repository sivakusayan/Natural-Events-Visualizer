/**
 * @fileoverview The reducer for the state's loading field. Will handle
 * parsing of actions related to the loading tag.
 */

const loadingReducerDefaultState = false;

export default (state = loadingReducerDefaultState, action) => {
  switch (action.type) {
    /**
     * Set the loading tag to true.
     */
    case 'START_LOADING':
      return true;
    /**
     * Set the loading tag to false.
     */
    case 'DONE_LOADING':
      return false;
    default:
      return state;
  }
}