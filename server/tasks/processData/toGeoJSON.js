/**
 * @fileoverview Handles conversion of API data into usable GeoJSON.
 */

/**
 * Converts the geometries given by the EONET API into a GeoJSON-compliant geometry
 * @param {Array.<{ date: String, type: String, coordinates: []}>} geometries 
 * Array of geometries containing spacetime data
 * @returns {{type: String, date: [String], coordinates: []}}
 * A GeoJSON-compliant geometry. EONET geometries that take place at a single point
 * in time are essentially preserved. Geometries that represent an evolution over
 * time are now represented by GeoJSON LineStrings, with a date array corresponding to 
 * each point on the line.
 *  
 */
const toGeoJSONGeometry = geometries => ({
  type: geometries.length === 1 ? geometries[0].type : 'LineString',
  date: geometries.map(geometry => geometry.date),
  coordinates: geometries.map(geometry => geometry.coordinates),
});

/**
 * Converts the data from the EONET API into usable GeoJSON.
 * @param {Array.<EventEonetJSON>} eventArray 
 * The array of events received from the EONET API.
 * @returns {Array.<EventGeoJSON>} 
 * A GeoJSON array containing EONET data.
 */
const toGeoJSON = eventArray => eventArray.map(event => ({
  _id: event.id,
  type: 'Feature',
  geometry: toGeoJSONGeometry(event.geometries),
  properties: {
    title: event.title,
    description: event.description,
    sources: event.sources,
    categories: event.categories.map(category => category.id),
  },
}));

module.exports = toGeoJSON;
