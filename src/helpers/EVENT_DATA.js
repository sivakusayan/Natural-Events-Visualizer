/**
 * @fileoverview Stores a read-only array of events from the EONET API.
 * 
 * @module src/data/EVENT_DATA
 */

import fetchEvents from './fetchEvents';

let EVENT_DATA = [];

export const loadEvents = async () => {
  EVENT_DATA = await fetchEvents();
};

export const getEvents = () => EVENT_DATA;
