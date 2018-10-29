/**
 * @fileoverview Handles parsing of the response from Google's Geocoding API
 */

/**
  * Takes a collection of addressComponents, and returns an appropriate
  * location object.
  * 
  * @param {{ long_name: String, short_name: String, types: String[]}[]} addressComponents
  * The address components returned from the API. 
  */
const parseLocation = (addressComponents) => {
  const location = {};
  for (let i = 0; i < addressComponents.length; i += 1) {
    const component = addressComponents[i];
    if (component.types.includes('country')) {
      location.country = component.long_name;
    } else if (component.types.includes('administrative_area_level_1')) {
      location.admin1 = component.long_name;
    } else if (component.types.includes('administrative_area_level_2')) {
      location.admin2 = component.long_name;
    }
  }
  return location;
};

module.exports = parseLocation;
