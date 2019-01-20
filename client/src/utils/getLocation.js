import pointMean from '../../../utils/pointMean';

/**
   * Takes in an event, and returns a suitable point
   * for the map to show the user for that event.
   * 
   * @param {EventGeoJSON} event 
   *  The event to find the flyTo point for
   * 
   * @returns
   *  A suitable flyTo point
   */
export default (event) => {
  if (!event) return [0, 0];
  const { geometry } = event;
  let point = null;
  if (geometry.type === 'Point') {
    point = geometry.coordinates;
  }
  // If LineString, return the most recent (last) point
  if (geometry.type === 'LineString') {
    point = geometry.coordinates[geometry.coordinates.length - 1];
  }
  if (geometry.type === 'Polygon') {
    point = pointMean(geometry.coordinates[0]);
  }
  return {
    lng: point[0],
    lat: point[1],
  };
};
