/**
 * @fileoverview Fetches the list of recent events for the database to use. 
 * After this data is received and converted into GeoJSON, it will need further processing
 * at 'utils/reverseGeocode.js', where the coordinates will be reverse geocoded to give each
 * event a named location.
 */
const fetchRetry = require('../../utils/fetchRetry');

/**
 * Fetches the data from the EONET API.
 * @returns {Promise<EventEonetJSON[]>} 
 * A promise that resolves to an array of EONET events.
 */
const fetchData = () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  return fetchRetry(eonetURL)
    .then(response => response.json())
    .then(data => data.events)
    .catch((err) => {
      throw err;
    });
};

module.exports = fetchData;
