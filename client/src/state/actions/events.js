/**
 * @fileoverview Generates the action to set what events are shown.
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
