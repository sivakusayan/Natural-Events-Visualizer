/**
 * @fileoverview The reducer for the state's selectedEvent field.
 */

import { SELECT_EVENT } from '../actionTypes/selectedEventActionTypes';

const selectedEventDefaultState = null;

export default (state = selectedEventDefaultState, action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return action.eventID;
    default:
      return state;
  }
};
