/**
 * @fileoverview Handles batch reverse geocoding for GeoJSON EONET events.
 */
const geocoder = require('local-reverse-geocoder');

const pointMean = require('../../utils/pointMean');
const getCountryName = require('./countryName');
const getWaterBody = require('./getWaterBody');

// ADJUST JS DOCS FOR CHANGED TYPE

/**
 * Takes a single point and returns the reverse geocoded location.
 * 
 * @param {[Number[]]} point
 * A point on the globe. Point is of the form [Longitude, Latitude].
 * 
 * @returns
 * The reverse geocoded location of the point
 */
const reverseGeocodePoint = async ([longitude, latitude]) => {
  // Check if point is on water
  const waterBody = getWaterBody([latitude, longitude]);
  if (waterBody) {
    return {
      city: '',
      province: '',
      country: '',
      waters: waterBody,
    };
  }

  // If not on water, get location on land
  let location;
  geocoder.lookUp({ latitude, longitude }, (err, res) => {
    if (err) console.log(err);

    const data = res[0][0];
    location = {
      city: data.name,
      province: data.admin1Code ? data.admin1Code.name : '',
      country: getCountryName(data.countryCode),
      waters: '',
    };
  });
  return location;
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
const reverseGeocodeEvents = (eventArray) => {
  const reverseGeocodedEvents = [];
  for (let i = 0; i < eventArray.length; i += 1) {
    const event = JSON.parse(JSON.stringify(eventArray[i]));
    if (event.geometry.type === 'Point') {
      // If Point, reverse geocode the point and attach location to event
      reverseGeocodedEvents.push(
        reverseGeocodePoint(event.geometry.coordinates)
          .then((location) => {
            event.geometry.location = location;
            return event;
          }),
      );
    } else if (event.geometry.type === 'Polygon') {
      // If Polygon, reverse geocode the average of the points and attach location to event
      reverseGeocodedEvents.push(
        reverseGeocodePoint(pointMean(event.geometry.coordinates))
          .then((location) => {
            event.geometry.location = location;
            return event;
          }),
      );
    } else if (event.geometry.type === 'LineString') {
      // If LineString, reverse geocode each point and attach location to event
      const locationArray = [];
      for (let j = 0; j < event.geometry.coordinates; j += 1) {
        locationArray.push(reverseGeocodePoint(event.geometry.coordinates[i]));
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
