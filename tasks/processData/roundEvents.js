/**
 * @fileoverview Rounds the coordinates of events to the specified precision. 
 * This has the benefit of making our GeoJSON more performant when rendered on Mapbox.
 */

const roundPoint = require('../../utils/roundPoint');

/**
 * Takes in a GeoJSON geometry and rounds its coordinates to make it more
 * performant.
 * 
 * @param {{ date: String, type: String, coordinates: []}} geometry 
 * The geometry to round the coordinates of
 * 
 * @returns {{ date: String, type: String, coordinates: []}}
 * A geometry with rounded coordinates
 */
const roundGeoJSONGeometry = (geometry) => {
  const roundedGeometry = JSON.parse(JSON.stringify(geometry));
  if (geometry.type === 'Point') {
    roundedGeometry.coordinates = roundPoint(geometry.coordinates);
  } else if (geometry.type === 'Polygon') {
    for (let i = 0; i < geometry.coordinates.length; i += 1) {
      // Defines the boundary of the polygon or hole inside polygon
      const boundary = geometry.coordinates[i];
      for (let j = 0; j < boundary.length; j += 1) {
        boundary[j] = roundPoint(boundary[j]);
      }
    }
  }
  return roundedGeometry;
};

/**
 * Takes in an array from the EONET API, and rounds its coordinates to
 * make it more performant.
 * 
 * @param {Array.<EventEonetJSON>} eventArray 
 * An array of events from the EONET API to round the coordinates of
 * 
 * @return {Array.<EventEonetJSON>}
 * An array of events with rounded coordinates
 */
const roundEvents = (eventArray) => {
  const roundedEvents = JSON.parse(JSON.stringify(eventArray));
  for (let i = 0; i < roundedEvents.length; i += 1) {
    // EONET API returns a list of geometries for each event
    const geometries = roundedEvents[i].geometries;
    for (let j = 0; j < geometries.length; j += 1) {
      geometries[j] = roundGeoJSONGeometry(geometries[j]);
    }
  }
  return roundedEvents;
};

module.exports = roundEvents;
