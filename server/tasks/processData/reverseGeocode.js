/**
 * @fileoverview Handles batch reverse geocoding for GeoJSON EONET events.
 */
const geocoder = require('local-reverse-geocoder');
const path = require('path');

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
const reverseGeocodePoint = ([longitude, latitude]) => {
  const ocean = checkOcean([latitude, longitude]);
  if (ocean) return ocean;

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
const reverseGeocode = (geoJSON) => {
  geocoder.init({
    // Disable download of geographical data we don't need
    load: {
      admin2: false,
      admin3and4: false,
      alternateNames: false,
    },
    // Path of geographical data used to reverse geocode
    dumpDirectory: path.join(__dirname, '../geonames'),
  }, async () => {
    for (let i = 0; i < geoJSON.length; i += 1) {
      const event = geoJSON[i];
      let location;
      if (event.geometry.type === 'Point') {
        // If Point, reverse geocode the point and attach location to event
        location = reverseGeocodePoint(event.geometry.coordinates);
        event.geometry.location = location;
      } else if (event.geometry.type === 'Polygon') {
        // If Polygon, reverse geocode the average of the points and attach location to event
        location = reverseGeocodePoint(pointMean(event.geometry.coordinates));
        event.geometry.location = location;
      } else if (event.geometry.type === 'LineString') {
        // If LineString, reverse geocode each point and attach location to event
        event.geometry.forEach(async (geometry) => {
          location = reverseGeocodePoint(geometry.coordinates);
          event.geometry.location = location;
        });
      }
    }
  });
};

module.exports = reverseGeocode;
