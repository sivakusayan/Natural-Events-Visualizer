/**
 * @fileoverview Handles conversion of API data into usable GeoJSON.
 */

const moment = require('moment');

/**
 * Converts the data given by the EONET API into a GeoJSON-compliant Feature.
 * @param {Array.<{ date: String, type: String, coordinates: []}>} geometries 
 * Array of geometries containing spacetime data
 * @returns {{type: String, date: [String], coordinates: []}}
 * A GeoJSON-compliant geometry. EONET geometries that take place at a single point
 * in time are essentially preserved. Geometries that represent an evolution over
 * time are now represented by GeoJSON LineStrings, with a date array associating 
 * a time stamp to each point on the LineString. Locations are calculated later
 * in the conversion process.
 */
const toGeoJSONGeometry = (geometries) => {
  // Check if event type is a Polygon or Point
  if (geometries.length === 1) {
    return {
      type: geometries[0].type,
      date: [Date.parse(geometries[0].date)],
      coordinates: geometries[0].coordinates,
      location: {},
    };
  }
  // Else event type is LineString
  return {
    type: 'LineString',
    date: geometries.map(geometry => moment(geometry.date).valueOf()),
    coordinates: geometries.map(geometry => geometry.coordinates),
    location: {},
  };
};

/**
 * Converts the data from the EONET API into usable GeoJSON.
 * @param {Array.<EventEonetJSON>} eventArray 
 * The array of events received from the EONET API.
 * @returns {Array.<EventGeoJSON>} 
 * A GeoJSON array containing EONET data.
 */
const toGeoJSONEvents = eventArray => eventArray.map(event => ({
  _id: event.id.split('_')[1], // Splits EONET_2912 into 2912 to eliminate redundancy
  type: 'Feature',
  geometry: toGeoJSONGeometry(event.geometries),
  properties: {
    title: event.title,
    description: event.description,
    sources: event.sources,
    categories: event.categories.map(category => category.id),
  },
}));

module.exports = toGeoJSONEvents;
