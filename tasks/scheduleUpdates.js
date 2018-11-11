/**
 * @fileoverview Runs a function daily to check for any new events from the Eonet API. If there are,
 * process and insert them into the database.
 */
const schedule = require('node-schedule');

const fetchData = require('./getData/fetchData');
const roundEvents = require('./processData/roundEvents');
const toGeoJSONEvents = require('./processData/toGeoJSONEvents');
const reverseGeocodeEvents = require('./processData/reverseGeocodeEvents');

const mongoose = require('../db/mongoose');
const Event = require('../models/Event');

/**
 * Queries the EONET API and filters for any new events not found in the
 * database. Once those events are found, they are processed then inserted
 * into the database.
 */
const insertData = async () => {
  const eventsInDB = await Event.find({}, '_id').then(ids => ids.map(id => `EONET_${id._id}`));
  const events = await fetchData();
  const newEvents = events.filter(event => !eventsInDB.includes(event.id));
  // Round GeoJSON coordinates to optimize MapBox performance
  const roundedEvents = roundEvents(newEvents);
  const geoJSONEvents = toGeoJSONEvents(roundedEvents);
  const reverseGeocodedEvents = await reverseGeocodeEvents(geoJSONEvents);
  Event.insertMany(reverseGeocodedEvents);
};

/**
 * Starts the reverse geocoding machinery, and then schedules the 
 * insertData function to everyday at midnight.
 */
const scheduleUpdates = () => {
  // schedule.scheduleJob('0 0 * * *', () => {
  //   try {
  //     // Try to update database
  //     insertData();
  //   } catch (err) {
  //     // If any errors are found (API Connections, etc.)
  //     // give up and try the next day.
  //   }
  // });
  insertData();
};

module.exports = scheduleUpdates;
