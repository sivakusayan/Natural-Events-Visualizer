/**
 * @fileoverview Generates the actions for manipulating events in the application.
 */

import { SET_EVENTS } from '../actionTypes/eventActionTypes';

/**
 * An action creator for setting the state's current events.
 * 
 * @param {EventGeoJSON[]} events 
 * An array of EventGeoJSON events
 */
export const setEvents = events => ({
  type: SET_EVENTS,
  events,
});
