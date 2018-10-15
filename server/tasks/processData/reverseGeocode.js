/**
 * @fileoverview Handles batch reverse geocoding for EONET events.
 */
const geocoder = require('local-reverse-geocoder');
const path = require('path');

const getCountryName = require('./countryName');

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

const reverseGeocode = ([longitude, latitude]) => {
  // Check if coordinate is in ocean
  // const ocean = checkOcean(geometry.coordinates);
  // if (ocean) console.log({ main: ocean });

  // If not in ocean, do typical lookup
  let location;
  geocoder.lookUp({ latitude, longitude }, (err, res) => {
    const data = res[0][0];
    console.log([latitude, longitude]);
    location = {
      city: data.name,
      province: data.admin1Code ? data.admin1Code.name : null,
      country: getCountryName(data.countryCode),
    };
  });
  return location;
};

const attachReverseGeocode = (geoJSON) => {
  geocoder.init({
    load: {
      admin2: false,
      admin3and4: false,
      alternateNames: false,
    },
    dumpDirectory: path.join(__dirname, '../geonames'),
  }, async () => {
    const processedJSON = await geoJSON.map(async (event) => {
      const coordinates = event.geometries[0].coordinates;
      const processedEvent = JSON.parse(JSON.stringify(event));
      if (coordinates[0].constructor === Array) {
        processedEvent.geometries[0].location = await reverseGeocode(pointMean(coordinates[0]));
      } else {
        processedEvent.geometries[0].location = await reverseGeocode(coordinates);
      }
      return processedEvent.geometries[0].location;
    });
    console.log(processedJSON);
  });
};

module.exports = attachReverseGeocode;
