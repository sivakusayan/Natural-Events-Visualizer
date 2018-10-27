/**
 * @fileoverview Fetches the list of recent events for the database to use. 
 * After this data is received and converted into GeoJSON, it will need further processing
 * at 'utils/reverseGeocode.js', where the coordinates will be reverse geocoded to give each
 * event a named location.
 */
const fetch = require('node-fetch');

/**
 * Fetches the data from the EONET API.
 * @returns {Promise<EventEonetJSON[]>} 
 * A promise that resolves to an array of EONET events.
 */
const fetchData = () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  return fetch(eonetURL)
    .then(response => response.json())
    .then(data => data.events)
    .catch((err) => {
      console.log('We seem to have trouble connecting to the API.');
    });
};

fetchData();

module.exports = fetchData;
