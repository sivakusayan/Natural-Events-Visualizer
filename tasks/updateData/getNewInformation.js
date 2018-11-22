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

/**
 * Builds a new information object.
 * 
 * @param {EventGeoJSON} oldEvent 
 *  The old outdated event
 * @param {EventGeoJSON} liveLineString 
 *  The new updated event
 * 
 * @returns {{ coordinates: Number[], date: Number[], location: EventLocation[] }}
 */
const getNewInformation = async (oldEvent, liveLineString) => {
  const newInformation = {};
  newInformation.coordinates = getNewCoordinates(oldEvent, liveLineString);
  // Round the new coordinates for optimization
  newInformation.coordinates = newInformation.coordinates.map(point => roundPoint(point));
  const locationPromises = []
  for (let i = 0; i < newInformation.coordinates; i += 1) {
    // Await here to avoid OVER_QUERY_LIMIT for Google API
    await sleep(WAIT_TIME);
    locationPromises.push(reverseGeocodePoint(newInformation.coordinates[i]));
  }
  newInformation.location = await Promise.all(locationPromises);
  // Since there are no expenses for dates, just copy it over
  newInformation.date = liveLineString.geometry.date;
  return newInformation;
};

module.exports = getNewInformation;
