/**
 * @fileoverview Runs a function daily to check for any new events from the Eonet API. If there are,
 * insert them into the database.
 */
const fetchEvents = require('./getData/fetchData');
const attachReverseGeocode = require('./processData/reverseGeocode');

(async () => {
  attachReverseGeocode(await fetchEvents());
})();
