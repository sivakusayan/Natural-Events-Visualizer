/**
 * @fileoverview Runs a function daily to check for any new events from the Eonet API. If there are,
 * insert them into the database.
 */
const geocoder = require('local-reverse-geocoder');
const path = require('path');

const fetchData = require('./getData/fetchData');
const toGeoJSON = require('./processData/toGeoJSON');
const reverseGeocode = require('./processData/reverseGeocode');

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
  reverseGeocode(toGeoJSON(await fetchData()));
});
