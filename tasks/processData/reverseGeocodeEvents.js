const sleep = require('../../utils/sleep');

const reverseGeocodePoint = require('./reverseGeocodePoint');
const pointMean = require('../../utils/pointMean');
const WAIT_TIME = require('../../constants/WAIT_TIME');

/**
 * Takes an array of EONET GeoJSON objects, and attaches the reverse-geocoded 
 * location to every geometry of each object. 
 * 
 * @param {Array.<EventGeoJSON>} eventArray
 * An array of EONET GeoJSON objects. 
 * 
 * @return {Array.<Promise>}
 * An array of promises resolving to EventGeoJSON objects with a 
 * new location attribute in their geometry.
 */
const reverseGeocodeEvents = async (eventArray) => {
  const reverseGeocodedEvents = [];
  for (let i = 0; i < eventArray.length; i += 1) {
    // Wait 1 second between requests to avoid 'OVER_QUERY_LIMIT'
    await sleep(WAIT_TIME);
    const event = JSON.parse(JSON.stringify(eventArray[i]));
    
    if (event.geometry.type === 'Point') {
      // If Point, reverse geocode the point 
      reverseGeocodedEvents.push(
        reverseGeocodePoint(event.geometry.coordinates)
          .then((location) => {
            event.geometry.location = [location];
            return event;
          }),
      );
    } else if (event.geometry.type === 'Polygon') {
      // If Polygon, reverse geocode the average of the points
      reverseGeocodedEvents.push(
        reverseGeocodePoint(pointMean(event.geometry.coordinates[0]))
          .then((location) => {
            event.geometry.location = [location];
            return event;
          }),
      );
    } else if (event.geometry.type === 'LineString') {
      // If LineString, reverse geocode each point
      const locationArray = [];
      for (let j = 0; j < event.geometry.coordinates.length; j += 1) {
        // Wait 1 second between requests to avoid 'OVER_QUERY_LIMIT'
        await sleep(WAIT_TIME);
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
