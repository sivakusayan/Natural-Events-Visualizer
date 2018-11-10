/**
 * Takes a pair of old GeoJSON and live GeoJSON, and checks if an update
 * was made.
 */
const isUpdated = (oldData, liveData) => {
  // If oldData is a point, since liveData is always a LineString it must
  // have been updated
  if (oldData.geometry.type === 'Point') {
    return true;
  }
  return oldData.geometry.coordinates.length < liveData.geometry.coordinates.length;
};

module.exports = isUpdated;
