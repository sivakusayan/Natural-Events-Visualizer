/**
 * @fileoverview Handles batch reverse geocoding for GeoJSON EONET events.
 */
const geocoder = require('local-reverse-geocoder');

const getCountryName = require('./countryName');
const getWaterBody = require('./getWaterBody');

/**
 * Takes an array of points and returns the point that has
 * averaged coordinates.
 * 
 * @param {Number[][]} points 
 * An array of points in two dimensional space.
 * 
 * @returns
 * The average of the points
 */
const pointMean = (points) => {
  let [xSum, ySum] = [0, 0];
  points.forEach((point) => {
    xSum += point[0];
    ySum += point[1];
  });
  return [xSum / points.length, ySum / points.length];
};

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
  const waterBody = getWaterBody([latitude, longitude]);
  if (waterBody) return waterBody;

  // If not in ocean, do typical lookup
  let location;
  geocoder.lookUp({ latitude, longitude }, (err, res) => {
    if (err) console.log(err);

    const data = res[0][0];
    location = {
      city: data.name,
      province: data.admin1Code ? data.admin1Code.name : null,
      country: getCountryName(data.countryCode),
    };
  });
  return location;
};

/**
 * Takes an array of EONET GeoJSON objects, and attaches the reverse-geocoded 
 * location to every geometry of each object. 
 * 
 * @param {Array.<EventGeoJSON>} geoJSON
 * An array of EONET GeoJSON objects. 
 */
const reverseGeocode = async (geoJSON) => {
  for (let i = 0; i < geoJSON.length; i += 1) {
    const event = geoJSON[i];
    if (event.geometry.type === 'Point') {
      // If Point, reverse geocode the point and attach location to event
      reverseGeocodePoint(event.geometry.coordinates)
        .then((location) => {
          event.geometry.location = location;
          console.log(event);
        });
    } else if (event.geometry.type === 'Polygon') {
      // If Polygon, reverse geocode the average of the points and attach location to event
      reverseGeocodePoint(pointMean(event.geometry.coordinates))
        .then((location) => {
          event.geometry.location = location;
          console.log(event.geometry);
        });
    } else if (event.geometry.type === 'LineString') {
      // If LineString, reverse geocode each point and attach location to event
      event.geometry.location = [];
      event.geometry.coordinates.forEach((coordinates) => {
        reverseGeocodePoint(coordinates)
          .then((location) => {
            event.geometry.location.push(location);
            console.log(event.geometry);
          });
      });
    }
  }
};

module.exports = reverseGeocode;
