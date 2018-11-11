const sleep = require('util').promisify(setTimeout);

const roundPoint = require('../../utils/roundPoint');
const reverseGeocodePoint = require('../processData/reverseGeocodePoint');
const WAIT_TIME = require('../../constants/WAIT_TIME');

/**
 * @returns
 *  Any new coordinates that have been added
 *  to the live event.
 */
const getNewCoordinates = (oldEvent, liveLineString) => {
  const { coordinates: oldCoordinates } = oldEvent.geometry;
  const { coordinates: liveCoordinates } = liveLineString.geometry;
  if (oldEvent.geometry.type === 'Point') {
    return liveCoordinates.slice(1);
  }
  return liveCoordinates.slice(oldCoordinates.length);
};

const getNewInformation = async (oldEvent, liveLineString) => {
  const newInformation = {};
  newInformation.coordinates = getNewCoordinates(oldEvent, liveLineString);
  // Round the new coordinates for optimization
  newInformation.coordinates = newInformation.coordinates.map(point => roundPoint(point));
  const locationPromises = newInformation.coordinates.map(async (coordinates) => {
    // Await here to avoid OVER_QUERY_LIMIT for Google API
    await sleep(WAIT_TIME);
    return reverseGeocodePoint(coordinates);
  });
  newInformation.location = await Promise.all(locationPromises);
  // Since there are no expenses for dates, just copy it over
  newInformation.date = liveLineString.geometry.date;
  return newInformation;
};

module.exports = getNewInformation;
