/**
 * Takes a pair of old GeoJSON and live GeoJSON, and checks if an update
 * was made.
 * 
 * @param {EventGeoJSON} oldData
 *  The old GeoJSON to check
 * @param {EventGeoJSON} liveData
 *  The live data to check
 * @returns
 *  True if an update is needed, false otherwise 
 */
const isUpdated = ([oldData, liveData]) => {
  // If oldData is a point, since liveData is always a LineString it must
  // have been updated
  if (oldData.geometry.type === 'Point') {
    return true;
  }
  return oldData.geometry.coordinates.length < liveData.geometry.coordinates.length;
};

module.exports = isUpdated;
