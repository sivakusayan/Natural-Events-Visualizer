/**
 * Filters for events that are both in the stored and live dataset.
 * 
 * @param {Array.<EventGeoJSON>} storedEvents
 *  A list of possibly outdated GeoJSON
 * @param {Array.<EventGeoJSON>} liveEvents
 *  A list of GeoJSON containing live data
 * 
 * @return {[EventGeoJSON, EventGeoJSON]} 
 *  A list of pairs. The first event in the array is a 
 *  possible candidate for updates, and should be checked for
 *  missing data. The second event is the live event, which
 *  contains the data that needs to be retrieved.
 */
const getUpdateCandidates = (storedEvents, liveEvents) => {
  const pairs = [];
  for (let i = 0; i < liveEvents.length; i += 1) {
    const { _id } = liveEvents[i];
    const match = storedEvents.filter(event => event._id === _id)[0];
    if (match) {
      pairs.push([match, liveEvents[i]]);
    }
  }
  return pairs;
};

module.exports = getUpdateCandidates;
