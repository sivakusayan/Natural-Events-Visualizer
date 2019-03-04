/**
 * @fileoverview Runs a function daily to check for any new events from the Eonet API. If there are,
 * process and insert them into the database.
 */
const schedule = require('node-schedule');

const sleep = require('../utils/sleep');
const WAIT_TIME = require('../constants/WAIT_TIME');

const fetchData = require('./getData/fetchData');
const roundEvents = require('./processData/roundEvents');
const toGeoJSONEvents = require('./processData/toGeoJSONEvents');
const reverseGeocodeEvents = require('./processData/reverseGeocodeEvents');

const loadOldLiveEvents = require('./updateData/loadOldLiveEvents');
const getUpdateCandidates = require('./updateData/getUpdateCandidates');
const isUpdated = require('./updateData/isUpdated');
const getNewInformation = require('./updateData/getNewInformation');
const updateEvent = require('./updateData/updateEvent');

const mongoose = require('../db/mongoose');
const Event = require('../models/Event');

/**
 * Queries the EONET API and filters for any new events not found in the
 * database. Once those events are found, they are processed then inserted
 * into the database.
 */
const insertNewEvents = async () => {
  const eventsInDB = await Event.find({}, '_id').then(ids => ids.map(id => `EONET_${id._id}`));
  const events = await fetchData();
  const newEvents = events.filter(event => !eventsInDB.includes(event.id));
  // Round GeoJSON coordinates to optimize MapBox performance
  const roundedEvents = roundEvents(newEvents);
  const geoJSONEvents = toGeoJSONEvents(roundedEvents);
  const reverseGeocodedEvents = await reverseGeocodeEvents(geoJSONEvents);
  Event.insertMany(reverseGeocodedEvents);
};

const updateOldEvents = async () => {
  const [oldEvents, liveLineStrings] = await loadOldLiveEvents();
  const updateCandidates = getUpdateCandidates(oldEvents, liveLineStrings);
  const needUpdates = updateCandidates.filter(
    ([oldEvent, liveLineString]) => isUpdated(oldEvent, liveLineString)
  );
  for (let i = 0; i < needUpdates.length; i += 1) {
    const [oldEvent, liveLineString] = needUpdates[i];
    // Pause function here to avoid OVER_QUERY_LIMIT
    await sleep(1000);
    const newInformation = await getNewInformation(oldEvent, liveLineString);
    // updateEvent(oldEvent, newInformation);
  }
};

/**
 * Starts the reverse geocoding machinery, and then schedules the 
 * insertData function to everyday at midnight.
 */
const scheduleUpdates = () => {
  schedule.scheduleJob('0 0 * * *', () => {
    try {
      // Chain after to make sure google API doesn't return OVER_QUERY_LIMIT
      // insertNewEvents().then(updateOldEvents());
      insertNewEvents().then(updateOldEvents);
    } catch (err) {
      // If any errors are found (API Connections, etc.)
      // give up and try the next day.
      console.log(err);
    }
  });

  // insertNewEvents().then(updateOldEvents);
};

module.exports = scheduleUpdates;
