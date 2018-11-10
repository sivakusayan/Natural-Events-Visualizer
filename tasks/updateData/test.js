const db = require('../../db/mongoose');
const Event = require('../../models/Event');
const roundPoint = require('../../utils/roundPoint');
const fetchData = require('../getData/fetchData');
const toGeoJSONEvents = require('../processData/toGeoJSONEvents');
const reverseGeocodePoint = require('../processData/reverseGeocodePoint');
const getUpdateCandidates = require('./getUpdateCandidates');
const getNewCoordinates = require('./getNewCoordinates');
const isUpdated = require('./isUpdated');

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
  needUpdates.forEach(([oldEvent, liveEvent]) => {
    let newCoordinates = getNewCoordinates(oldEvent, liveEvent);
    // Round the new coordinates for optimization
    newCoordinates = newCoordinates.map(point => roundPoint(point));
    const newDates = liveEvent.geometry.date;
    // Calculate locations for new coordinates
    console.log(`New coordinates for ${oldEvent._id}: ${newCoordinates}`);
    // Append data to oldEvent
  });
})();
