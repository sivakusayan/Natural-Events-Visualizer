const db = require('../../db/mongoose');
const Event = require('../../models/Event');

const fetchData = require('../getData/fetchData');
const toGeoJSONEvents = require('../processData/toGeoJSONEvents');
const getUpdateCandidates = require('./getUpdateCandidates');
const isUpdated = require('./isUpdated');

(async () => {
  // Load stored LineStrings
  const loadStored = Event.find()
    .then(events => events.filter(event => event.geometry.type === 'LineString' || event.geometry.type === 'Point'));
  // Load live LineStrings
  const loadLive = fetchData()
    .then(events => toGeoJSONEvents(events).filter(event => event.geometry.type === 'LineString'));
  // Wait for data to load
  const [storedEvents, liveEvents] = await Promise.all([loadStored, loadLive]);
  // Check for events which are possibly updated
  const updateCandidates = getUpdateCandidates(storedEvents, liveEvents);
  // Find events which need updates
  const needUpdates = updateCandidates.filter(pair => isUpdated(pair));
  needUpdates.forEach((pair) => {
    // Get the new coordinates
    const newCoordinates = 

    // Get the new dates

    // Calculate locations for new coordinates

    // Append data to storedEvent
  });
})();
