/**
 * @fileoverview Fetches the list of recent events for the application to use.
 * 
 * @module src/data/eventData
 */
import axios from 'axios';

/**
 * Fetches the data from the EONET API.
 * @function
 * 
 * @returns {string} A JSON list of EONET events.
 */
const fetchEonetData = async () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  return await axios.get(eonetURL)
    .then(response => response.data.events)
    .catch((err) => {
      if (err.code = 'ENOTFOUND' || console.log('The URL is incorrect: API data cannot be fetched.')) {
        console.log('The URL is incorrect: API data cannot be fetched.');
      } else {
        console.log('Sorry, something seems to have gone wrong.');
        console.log(err);
      }
    });
};

/**
 * Converts the data from the EONET API into usable GeoJSON.
 * @function
 * 
 * @param {Array} eventArray The array of events received from the EONET API.
 * 
 * @returns {Array} A GeoJSON array containing EONET data.
 */
const convertData = (eonetJson) => {
  return eonetJson.map((event) => {
    return {
      type: 'Feature',
      id: event.id,
      sources: event.sources,
      geometry: {
        type: event.geometries[0].type, // Taking first element shows initial data (implement event progression later?)
        coordinates: event.geometries[0].coordinates
      },
      properties: {
        title: event.title,
        description: event.description,
        categories: event.categories.map((category) => category.title),
        date: event.geometries[0].date
      }
    }
  })
};

/**
 * Fetches events from the EONET API and converts them into GeoJSON.
 * @name fetchEvents
 * @function
 * 
 * @returns {Array} A GeoJSON array of natural events.
 */
export default async () => convertData(await fetchEonetData());
