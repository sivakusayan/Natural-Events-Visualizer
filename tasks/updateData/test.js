const db = require('../../db/mongoose');
const Event = require('../../models/Event');

const fetchData = require('../getData/fetchData');
const toGeoJSONEvents = require('../processData/toGeoJSONEvents');
const getUpdateCandidates = require('./getUpdateCandidates');

(async () => {
  // Load stored LineStrings
  const loadStored = Event.find()
    .then(events => events.filter(event => event.geometry.type === 'LineString'));
  // Load live LineStrings
  const loadLive = fetchData()
    .then(events => toGeoJSONEvents(events).filter(event => event.geometry.type === 'LineString'));
  const [storedEvents, liveEvents] = await Promise.all([loadStored, loadLive]);
  console.log(getUpdateCandidates(storedEvents, liveEvents).map(pair => pair[0]._id));
})();
