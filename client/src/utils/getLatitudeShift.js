/**
 * Calculates the number to shift the latitude by. We use this
 * function instead of a constant since a constant shift may be
 * too big once zoomed in, or too small once zoomed out.
 * 
 * @param {Number} baseZoom
 *  The base zoom level of the map.
 * @param {Number} currentZoom
 *  An integer indicating the current zoom level
 * @param {Number} distance
 *  The number to shift by on the baseZoom level.
 * 
 * @returns
 *  The number to shift the latitude by 
 */
const getLatitudeShift = (baseZoom, currentZoom, distance = 5) => {
  // Remember that if the zoom is bigger than baseZoom, then
  // we change zoom to baseZoom, so just use the distance we
  // would use for the baseZoom level. Note this also solves
  // any async problems with setState in EventMapContainer.
  if (currentZoom <= baseZoom) return distance;
  
  // We choose 2 as our base exponential based on the
  // zoom level to scale mapping shown here:
  // https://wiki.openstreetmap.org/wiki/Zoom_levels
  const multiplier = (2 ** (baseZoom - currentZoom));
  return distance * multiplier;
};

export default getLatitudeShift;
