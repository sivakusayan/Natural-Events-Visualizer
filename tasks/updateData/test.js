const sleep = require('util').promisify(setTimeout);
const roundPoint = require('../../utils/roundPoint');
const loadOldLiveEvents = require('./loadOldLiveEvents');
const reverseGeocodePoint = require('../processData/reverseGeocodePoint');
const getUpdateCandidates = require('./getUpdateCandidates');
const getNewCoordinates = require('./getNewCoordinates');
const isUpdated = require('./isUpdated');
const WAIT_TIME = require('../../constants/WAIT_TIME');

(async () => {
  const [oldEvents, liveLineStrings] = await loadOldLiveEvents();
  const updateCandidates = getUpdateCandidates(oldEvents, liveLineStrings);
  const needUpdates = updateCandidates.filter(
    ([oldEvent, liveLineString]) => isUpdated(oldEvent, liveLineString)
  );
  needUpdates.forEach(async ([oldEvent, liveLineString]) => {
    const newInformation = {};
    newInformation.coordinates = getNewCoordinates(oldEvent, liveLineString);
    // Round the new coordinates for optimization
    newInformation.coordinates = newInformation.coordinates.map(point => roundPoint(point));
    // Since there are no expenses for dates, just copy it over
    newInformation.date = liveLineString.geometry.date;
    const locationPromises = newInformation.coordinates.map(async (coordinates) => {
      // Await here to avoid OVER_QUERY_LIMIT for Google API
      await sleep(WAIT_TIME);
      return reverseGeocodePoint(coordinates)
    });
    newInformation.location = await Promise.all(locationPromises);
    updateEvent(oldEvent, newInformation);
  });
})();
