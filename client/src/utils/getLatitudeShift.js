/**
 * Calculates the number to shift the latitude by. We use this
 * function instead of a constant since a constant shift may be
 * too big once zoomed in, or too small once zoomed out.
 * 
 * @param {Number} baseZoom
 *  The base zoom level of the map.
 * @param {Number} currentZoom
 *  An integer indicating the current zoom level
 * @param {Number} latitude
 *  The current latitude. We use this number to account for 
 *  distortions coming from the Mercator projection.
 * @param {Number} distance
 *  The number to shift by on the baseZoom level.
 * 
 * @returns
 *  The number to shift the latitude by 
 */
const getLatitudeShift = (baseZoom, currentZoom, latitude, distance = 5) => {
  // We use this multiplier to account for the Mercator projection.
  // https://gis.stackexchange.com/questions/93332/calculating-distance-scale-factor-by-latitude-for-mercator
  const radians = latitude * Math.PI / 180;
  const latitudeMultiplier = Math.abs(Math.cos(radians));
  // Remember that if the zoom is bigger than baseZoom, then
  // we change zoom to baseZoom, so just use the distance we
  // would use for the baseZoom level. Note this also solves
  // any async problems with setState in EventMapContainer.
  if (currentZoom <= baseZoom) return distance * latitudeMultiplier;
  // We choose 2 as our base exponential based on the
  // zoom level to scale mapping shown here:
  // https://wiki.openstreetmap.org/wiki/Zoom_levels
  const zoomMultiplier = (2 ** (baseZoom - currentZoom));
  return distance * zoomMultiplier * latitudeMultiplier;
};

export default getLatitudeShift;
