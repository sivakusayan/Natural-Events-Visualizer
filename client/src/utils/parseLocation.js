import toTitleCase from './toTitleCase';

/**
 * Takes in a location object, and outputs
 * a formatted string based on the given data.
 * 
 * @param {{city, province, country, waters}} location
 * An object containing location data
 * @return {String}
 * A formatted string of the specified location data
 */
const parseLocation = (location) => {
  if (location.waters) return toTitleCase(location.waters);
  // We don't blindly loop through object since we want to guarantee
  // that the array is in a certain order.
  const locationArray = [];
  if (location.admin2) locationArray.push(toTitleCase(location.admin2));
  if (location.admin1) locationArray.push(toTitleCase(location.admin1));
  if (location.country) locationArray.push(toTitleCase(location.country));

  return locationArray.join(', ');
};

export default parseLocation;
