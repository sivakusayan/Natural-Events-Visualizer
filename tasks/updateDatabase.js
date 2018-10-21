/**
 * @fileoverview Runs a function daily to check for any new events from the Eonet API. If there are,
 * insert them into the database.
 */
const geocoder = require('local-reverse-geocoder');
const path = require('path');
const { performance } = require('perf_hooks');

const fetchData = require('./getData/fetchData');
const toGeoJSON = require('./processData/toGeoJSON');
const reverseGeocode = require('./processData/reverseGeocode');

const mongoose = require('../db/mongoose');
const Event = require('../models/Event');

geocoder.init({
  // Disable download of geographical data we don't need
  load: {
    admin2: false,
    admin3and4: false,
    alternateNames: false,
  },
  // Path of geographical data used to reverse geocode
  dumpDirectory: path.join(__dirname, 'geoLand'),
}, async () => {
  // Find id of Events already in Database
  const eventsInDB = await Event.find({},'_id').then(ids => ids.map(id => id._id));
  console.log("Events already in Database: " + eventsInDB.length);
  // Fetch events from EONET API
  const events = await fetchData();
  console.log("Events from API: " + events.length);
  // Filter for events not in the database
  const newEvents = events.filter(event => !eventsInDB.includes(event.id));
  console.log("Number of new events: " + newEvents.length);
  // Converts the new events into a usable form
  const convertedEvents = await reverseGeocode(toGeoJSON(newEvents));
});


