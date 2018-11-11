const db = require('../../db/mongoose');
const Event = require('../../models/Event');
const fetchData = require('../getData/fetchData');
const toGeoJSONEvents = require('../processData/toGeoJSONEvents');

const loadOldLiveEvents = () => {
  // We restrict our search range to only LineStrings and Points for now.
  // This is because MultiPolygon events (Polygons Over Time) are not supported
  // by the application at this time, nor does it seem used by the EONET API.
  // This may change in the future.
  const loadOldEvents = Event.find()
    .then(events => events.filter(event => event.geometry.type === 'LineString' || event.geometry.type === 'Point'));
  // We filter for LineStrings since those are the only events that can hold updates.
  // Can possibly change if MultiPolygon support is implemented.
  const loadLiveLineStrings = fetchData()
    .then(events => toGeoJSONEvents(events).filter(event => event.geometry.type === 'LineString'));
  return Promise.all([loadOldEvents, loadLiveLineStrings]);
};

module.exports = loadOldLiveEvents;
