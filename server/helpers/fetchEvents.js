/**
 * @fileoverview Fetches the list of recent events for the database to use. 
 */
const axios = require('axios');

/**
 * The EONET API model for event data.
 * @typedef {Object} EventEonetJSON
 * @property {String} id ID for each event
 * @property {String} title Name of each event
 * @property {String} description Description of each event
 * @property {String} link Link to obtain this item from the API
 * @property {Array.<{ id: Number, title: String}>} categories Array of categories that the event falls under.
 * @property {Array.<{ id: String, title: String}>} sources Array of official sources with information on the event
 * @property {Array.<{ date: String, type: String, coordinates: [Number]}>} geometries - Array of geometries containing spacetime data
 * 
 * 
 * A GeoJSON implementation of EONET event data.
 * @typedef {Object} EventGeoJSON
 * @property {String} id ID for each event
 * @property {Array.<{ id: String, title: String}>} sources Array of official sources with information on the event
 * @property {Array.<{type: String, coordinates: [Number]}>} geometries Array of geometries containing spacial data
 * @property {Array.<{title: String, description: String, categories: String[], date: String}} properties Nonspacial properties
 */

/**
 * Fetches the data from the EONET API.
 * @async
 * @returns {Array.<EventEonetJSON>} An array of EONET events.
 */
const fetchEonetData = async () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  return axios.get(eonetURL)
    .then(response => response.data.events)
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
  type: 'Feature',
  id: event.id,
  sources: event.sources,
  geometry: event.geometries.map((geometry) => ({ 
    type: geometry.type,                             
    coordinates: geometry.coordinates
  })),
  properties: {
    title: event.title,
    description: event.description,
    categories: event.categories.map(category => category.title),
    date: event.geometries[0].date,
  },
}));


/**
 * Fetches events from the EONET API and converts them into GeoJSON.
 * @async 
 * @returns A GeoJSON array of natural events.
 */
module.exports.fetchEvents = async () => convertData(await fetchEonetData());