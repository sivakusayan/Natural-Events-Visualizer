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
const fetchEonetData = () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  axios.get(eonetURL)
    .then(response => console.log(response.data.events))
    .catch((err) => {
      console.log('Something went wrong :(');
      console.log(err);
    });
};

/**
 * Converts the JSON from the EONET API into usable GeoJSON.
 * @function
 * 
 * @param {String} eonetJson The JSON received from the EONET API.
 * 
 * @returns {String} A GeoJSON representation of EONET data.
 */
const convertData = (eonetJson) => {
  console.log(eonetJson);
};

/**
 * Fetches events from the EONET API and converts them into GeoJSON.
 * @name fetchEvents
 * @function
 * 
 * @returns {string} A GeoJSON list of natural events.
 */
export default () => convertData(fetchEonetData());
