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

// NOTE: SEPARATE FETCHERS AND CONVERTERS LATER

/**
 * Converts the geometries given by the EONET API into a GeoJSON-compliant geometry
 * @param {Array.<{ date: String, type: String, coordinates: []}>} geometries 
 * Array of geometries containing spacetime data
 * @returns {{type: String, date: [String], coordinates: []}}
 * A GeoJSON-compliant geometry. EONET geometries that take place at a single point
 * in time are essentially preserved. Geometries that represent an evolution over
 * time are now represented by GeoJSON LineStrings, with a date array corresponding to 
 * each point on the line.
 *  
 */
const convertGeometry = (geometries) => {
  return {
    type: geometries.length === 1 ? geometries[0].type : 'LineString',
    date: geometries.map(geometry => geometry.date),
    coordinates: geometries.map(geometry => geometry.coordinates),
  }
};

/**
 * Converts the data from the EONET API into usable GeoJSON.
 * @param {Array.<EventEonetJSON>} eventArray 
 * The array of events received from the EONET API.
 * @returns {Array.<EventGeoJSON>} 
 * A GeoJSON array containing EONET data.
 */
const convertData = eventArray => eventArray.map(event => ({
  _id: event.id,
  type: 'Feature',
  geometry: convertGeometry(event.geometries),
  properties: {
    title: event.title,
    description: event.description,
    sources: event.sources,
    categories: event.categories.map(category => category.id),
  },
}));


/**
 * Fetches events from the EONET API and converts them into GeoJSON.
 * @async 
 * @returns {Array.<EventGeoJSON>} 
 * A GeoJSON array of natural events.
 */
const fetchEvents = async () => convertData(await fetchEonetData());

module.exports = fetchEvents;
