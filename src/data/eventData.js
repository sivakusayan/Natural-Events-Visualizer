/**
 * @fileoverview Fetches the list of recent events for the application to use.
 * 
 * @module src/data/eventData
 */
// import axios from 'axios';
const axios = require('axios');

/**
 * Fetches the data from the EONET API.
 * @function
 * 
 * @returns {string} A JSON list of EONET events.
 */
const fetchEonetData = async () => {
  const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
  return await axios.get(eonetURL)
    .then(response => response.data)
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
// export default () => convertData(fetchEonetData());
