/**
 * @fileoverview Handles conversion of API data into usable GeoJSON.
 */

/**
 * Converts the data given by the EONET API into a GeoJSON-compliant Feature.
 * @param {Array.<{ date: String, type: String, coordinates: []}>} geometries 
 * Array of geometries containing spacetime data
 * @returns {{type: String, date: [String], coordinates: []}}
 * A GeoJSON-compliant geometry. EONET geometries that take place at a single point
 * in time are essentially preserved. Geometries that represent an evolution over
 * time are now represented by GeoJSON LineStrings, with a date array associating 
 * a time stamp to each point on the LineString.
 */
const toGeoJSONGeometry = (geometries) => {
  // Check if event type is a Polygon or Point
  if (geometries.length === 1) {
    return {
      type: geometries[0].type,
      date: Date.parse(geometries[0].date),
      coordinates: geometries[0].coordinates,
    };
  }
  // Else event type is LineString
  return {
    type: 'LineString',
    date: geometries.map(geometry => Date.parse(geometry.date)),
    coordinates: geometries.map(geometry => geometry.coordinates),
  };
};

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
