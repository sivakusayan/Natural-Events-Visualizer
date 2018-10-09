/**
 * @fileoverview Handles batch reverse geocoding for EONET events.
 */
const geocoder = require('local-reverse-geocoder');
const path = require('path');

const fetchEvents = require('./fetchEvents');

const reverseGeocode = (geometry) => {
  // Check if coordinate is in ocean
  // const ocean = checkExtremes(geometry.coordinates);
  // if (ocean) console.log({ main: ocean });

  // If not in ocean, do typical lookup
  geocoder.lookUp(geometry.coordinates, (err, res) => {
    const data = res[0][0];
    console.log({ city: data.name, province: data.admin1code, country: data.countryCode });
  });
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
    geoJSON.forEach(event => reverseGeocode(event.geometries[0].coordinates));
  });
};

(async () => {
  attachReverseGeocode(await fetchEvents());
})();

module.exports.attachReverseGeocode = attachReverseGeocode;
