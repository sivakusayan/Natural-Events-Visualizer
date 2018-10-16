/**
 * @fileoverview Runs a function daily to check for any new events from the Eonet API. If there are,
 * insert them into the database.
 */
const fetchData = require('./getData/fetchData');
const toGeoJSON = require('./processData/toGeoJSON');
const reverseGeocode = require('./processData/reverseGeocode');

(async () => {
  reverseGeocode(toGeoJSON(await fetchData()));
})();
