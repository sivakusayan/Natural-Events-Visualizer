/**
 * @fileoverview Fetches the list of recent events for the database to use. 
 * After this data is received and converted into GeoJSON, it will need further processing
 * at 'utils/reverseGeocode.js', where the coordinates will be reverse geocoded to give each
 * event a named location.
 */
const fetch = require('node-fetch');

/**
 * Fetches the data from the EONET API.
 * @async
 * @returns {Array.<EventEonetJSON>} 
 * An array of EONET events.
 */
const fetchData = async () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  return fetch(eonetURL)
    .then(response => response.json())
    .then(data => data.events)
    .catch((err) => {
      if (err.code === 'ENOTFOUND') {
        console.log('The URL is incorrect: API data cannot be fetched.');
      } else {
        console.log('Sorry, something seems to have gone wrong.');
      }
    });
};

module.exports = fetchData;
