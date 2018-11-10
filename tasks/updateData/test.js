const db = require('../../db/mongoose');
const Event = require('../../models/Event');
const roundPoint = require('../../utils/roundPoint');
const fetchData = require('../getData/fetchData');
const toGeoJSONEvents = require('../processData/toGeoJSONEvents');
const reverseGeocodePoint = require('../processData/reverseGeocodePoint');
const getUpdateCandidates = require('./getUpdateCandidates');
const getNewCoordinates = require('./getNewCoordinates');
const isUpdated = require('./isUpdated');
const sleep = require('util').promisify(setTimeout);
const WAIT_TIME = require('../../constants/WAIT_TIME');

(async () => {
  const loadOldEvents = Event.find()
    .then(events => events.filter(event => event.geometry.type === 'LineString' || event.geometry.type === 'Point'));
  const loadLiveEvents = fetchData()
    .then(events => toGeoJSONEvents(events).filter(event => event.geometry.type === 'LineString'));
  const [oldEvents, liveEvents] = await Promise.all([loadOldEvents, loadLiveEvents]);

  const updateCandidates = getUpdateCandidates(oldEvents, liveEvents);
  const needUpdates = updateCandidates.filter(
    ([oldEvent, liveEvent]) => isUpdated(oldEvent, liveEvent)
  );
  needUpdates.forEach(async ([oldEvent, liveEvent]) => {
    let newCoordinates = getNewCoordinates(oldEvent, liveEvent);
    // Round the new coordinates for optimization
    newCoordinates = newCoordinates.map(point => roundPoint(point));
    const newDates = liveEvent.geometry.date;
    const locationPromises = newCoordinates.map(async (coordinates) => {
      await sleep(WAIT_TIME);
      return reverseGeocodePoint(coordinates)
    });
    const newLocations = await Promise.all(locationPromises);
    
    // Append data to oldEvent
  });
})();
