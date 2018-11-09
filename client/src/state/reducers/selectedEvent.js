/**
 * @fileoverview The reducer for the state's selectedEvent field.
 */

import { SELECT_EVENT } from '../actionTypes/selectedEventActionTypes';

const selectedEventState = null;

export default (state = selectedEventState, action) => {
  switch (action.type) {
    case SELECT_EVENT:
      return action.eventID;
    default:
      return state;
  }
};
