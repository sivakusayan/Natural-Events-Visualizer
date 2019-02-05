const fetchRetry = require('../../utils/fetchRetry');
const parseLocation = require('./parseLocation');
const getWaterBody = require('./getWaterBody');
const { GOOGLE_REVERSE_GEOCODE_URL } = require('../../constants/URL_STRINGS');
let KEY;
if (process.env.NODE_ENV === 'production') {
  KEY = process.env.DB_KEY;
} else {
  KEY = require('../../constants/GOOGLE_API_KEY');
}

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
  const apiURL = `${GOOGLE_REVERSE_GEOCODE_URL}?latlng=${latitude},${longitude}&key=${KEY}`;
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

module.exports = reverseGeocodePoint;
