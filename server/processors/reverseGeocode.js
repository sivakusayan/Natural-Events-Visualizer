/**
 * @fileoverview Handles batch reverse geocoding for EONET events.
 */
const geocoder = require('local-reverse-geocoder');
const path = require('path');

const fetchEvents = require('./fetchEvents');
const getCountryName = require('./countryName');

const reverseGeocode = ([longitude, latitude]) => {
  // Check if coordinate is in ocean
  // const ocean = checkOcean(geometry.coordinates);
  // if (ocean) console.log({ main: ocean });

  // If not in ocean, do typical lookup
  geocoder.lookUp({ latitude, longitude }, (err, res) => {
    const data = res[0][0];
    console.log([latitude, longitude]);
    console.log({
      city: data.name,
      province: data.admin1Code !== null ? data.admin1Code.name : null,
      country: getCountryName(data.countryCode),
    });
  });
};

const pointMean = (points) => {
  let [xSum, ySum] = [0, 0];
  points.forEach((point) => {
    xSum += point[0];
    ySum += point[1];
  });
  return [xSum / points.length, ySum / points.length];
};

const attachReverseGeocode = async (geoJSON) => {
  geocoder.init({
    load: {
      admin2: false,
      admin3and4: false,
      alternateNames: false,
    },
    dumpDirectory: path.join(__dirname, '../geonames'),
  }, () => {
    geoJSON.forEach((event) => {
      const coordinates = event.geometries[0].coordinates;
      if (coordinates[0].constructor === Array) {
        reverseGeocode(pointMean(coordinates[0]));
      } else {
        reverseGeocode(coordinates);
      }
    });
  });
};

(async () => {
  attachReverseGeocode(await fetchEvents());
})();

// module.exports.attachReverseGeocode = attachReverseGeocode;
