/**
 * @fileoverview Generates the action to select an event.
 */

import { SELECT_EVENT } from '../actionTypes/selectedEventActionTypes';

/**
 * An action generator to set the selected event.
 * 
 * @param {Number} eventID 
 *  The ID of the event to be selected
 */
export const selectEvent = (eventID) => ({
  type: SELECT_EVENT,
  eventID,
});
