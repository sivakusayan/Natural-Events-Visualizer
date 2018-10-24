/**
 * @fileoverview The reducer for the state's event field. Will handle
 * parsing of actions related to events.
 */

const eventsReducerDefaultState = [];

export default (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    /**
     * Set the state's current events.
     */
    case 'SET_EVENTS':
      return [...action.events];
    default:
      return state;
  }
};
