/**
 * @fileoverview Handles reverse geocoding for GeoJSON EONET events.
 */
const sleep = require('util').promisify(setTimeout);

const fetchRetry = require('../../utils/fetchRetry');
const pointMean = require('../../utils/pointMean');

const parseLocation = require('./parseLocation');
const getWaterBody = require('./getWaterBody');

const key = require('../../constants/apiKey');

/**
 * Takes a single point and returns the reverse geocoded location. If the
 * reverse geocoding API finds a location, we return that value. Otherwise, 
 * the point is on water, and so we return its water body instead.
 * 
 * @param {[Number[]]} point
 * A point on the globe. Point is of the form [Longitude, Latitude].
 * 
 * @returns
 * The reverse geocoded location of the point
 */
const reverseGeocodePoint = async ([longitude, latitude]) => {
  const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`;
  const assert = data => data.status === 'OK' || data.status === 'ZERO_RESULTS';
  const data = await fetchRetry(apiURL, assert);
  if (data.status === 'ZERO_RESULTS') {
    // If location isn't on land, get the water body
    return {
      waters: getWaterBody([longitude, latitude]),
    };
  }
  // Else, parse location of closest (first) result
  return parseLocation(data.results[0].address_components);
};

/**
 * Takes an array of EONET GeoJSON objects, and attaches the reverse-geocoded 
 * location to every geometry of each object. 
 * 
 * @param {Array.<EventGeoJSON>} eventArray
 * An array of EONET GeoJSON objects. 
 * 
 * @return {Array.<Promise>}
 * An array of promises resolving to the modified EONET GeoJSON objects with a 
 * new location attribute in their geometry.
 */
const reverseGeocodeEvents = async (eventArray) => {
  const reverseGeocodedEvents = [];
  for (let i = 0; i < eventArray.length; i += 1) {
    // Wait 1 second between requests to avoid 'OVER_QUERY_LIMIT'
    await sleep(1000);
    const event = JSON.parse(JSON.stringify(eventArray[i]));
    if (event.geometry.type === 'Point') {
      // If Point, reverse geocode the point and attach location to event
      reverseGeocodedEvents.push(
        reverseGeocodePoint(event.geometry.coordinates)
          .then((location) => {
            event.geometry.location = [location];
            return event;
          }),
      );
    } else if (event.geometry.type === 'Polygon') {
      // If Polygon, reverse geocode the average of the points and attach location to event
      reverseGeocodedEvents.push(
        reverseGeocodePoint(pointMean(event.geometry.coordinates[0]))
          .then((location) => {
            event.geometry.location = [location];
            return event;
          }),
      );
    } else if (event.geometry.type === 'LineString') {
      // If LineString, reverse geocode each point and attach location to event
      const locationArray = [];
      for (let j = 0; j < event.geometry.coordinates.length; j += 1) {
        // Wait 1 second between requests to avoid 'OVER_QUERY_LIMIT'
        await sleep(1000);
        locationArray.push(reverseGeocodePoint(event.geometry.coordinates[j]));
      }
      reverseGeocodedEvents.push(
        Promise.all(locationArray)
          .then((locations) => {
            event.geometry.location = locations;
            return event;
          }),
      );
    }
  }
  return Promise.all(reverseGeocodedEvents);
};

module.exports = reverseGeocodeEvents;
