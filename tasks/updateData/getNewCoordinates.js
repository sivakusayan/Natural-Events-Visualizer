/**
 * @returns
 *  Any new coordinates that have been added
 *  to the live event.
 */
const getNewCoordinates = (oldEvent, liveEvent) => {
  const { coordinates: oldCoordinates } = oldEvent.geometry;
  const { coordinates: liveCoordinates } = liveEvent.geometry;
  if (oldEvent.geometry.type === 'Point') {
    return liveCoordinates.slice(1);
  }
  return liveCoordinates.slice(oldCoordinates.length);
};

module.exports = getNewCoordinates;
