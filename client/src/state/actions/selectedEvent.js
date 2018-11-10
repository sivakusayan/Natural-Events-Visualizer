import { SELECT_EVENT } from '../actionTypes/selectedEventActionTypes';

export const selectEvent = (eventID) => ({
  type: SELECT_EVENT,
  eventID,
});
