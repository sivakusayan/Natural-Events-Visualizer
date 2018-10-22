/**
 * @fileoverview Rounds the coordinates of events to a precision of four decimal places. 
 * This has the benefit of making our GeoJSON more performant when rendered on Mapbox.
 * According to the Wikipedia page at: https://en.wikipedia.org/wiki/Decimal_degrees and 
 * the discussion at https://gis.stackexchange.com/questions/8650/measuring-accuracy-of-latitude-and-longitude,
 * this should be sufficient to distinguish two different parcels of land, which is more 
 * than enough for our needs.
 */

const roundPoint = require('../../utils/rountPoint');

const PRECISION = 4;

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
    roundedGeometry.coordinates = roundPoint(geometry.coordinates, PRECISION);
  } else if (geometry.type === 'Polygon') {
    for (let i = 0; i < geometry.coordinates.length; i += 1) {
      // Defines the boundary of the polygon or hole inside polygon
      const boundary = geometry.coordinates[i];
      for (let j = 0; j < boundary.length; j++) {
        boundary[j] = roundPoint(boundary[j], PRECISION);
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
