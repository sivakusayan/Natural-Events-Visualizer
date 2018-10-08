/**
 * @fileoverview Fetches the list of recent events for the database to use. 
 */
const fetch = require('node-fetch');

/**
 * Fetches the data from the EONET API.
 * @async
 * @returns {Array.<EventEonetJSON>} An array of EONET events.
 */

const fetchEonetData = async () => {
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
      // IMPLEMENT DATABASE BACKUP LATER
    });
};

/**
 * Converts the data from the EONET API into usable GeoJSON.
 * @param {Array.<EventEonetJSON>} eventArray The array of events received from the EONET API.
 * @returns {Array.<EventGeoJSON>} 
 * A GeoJSON array containing EONET data.
 */
const convertData = eventArray => eventArray.map(event => ({
  _id: event.id,
  type: 'Feature',
  geometry: event.geometries,
  properties: {
    title: event.title,
    description: event.description,
    sources: event.sources,
    categories: event.categories,
  },
}));


/**
 * Fetches events from the EONET API and converts them into GeoJSON.
 * @async 
 * @returns {Array.<EventGeoJSON>} A GeoJSON array of natural events.
 */
const fetchEvents = async () => convertData(await fetchEonetData());

module.exports = fetchEvents;
