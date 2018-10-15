/** 
 * @typedef {Object} EventEonetJSON
 * The EONET API model for event data.
 * @property {String} id 
 * ID of the event
 * @property {String} title 
 * Name of the event
 * @property {String} description 
 * Description of the event
 * @property {String} link 
 * Link to obtain this item from the API
 * @property {Array.<{ id: Number, title: String}>} categories 
 * Array of categories that the event falls under
 * @property {Array.<{ id: String, title: String}>} sources 
 * Array of official sources with information on the event
 * @property {Array.<{ date: String, type: String, coordinates: []}>} geometry 
 * Array of geometries containing spacetime data
 */

 /**
 * @typedef {Object} EventGeoJSON
 * A GeoJSON implementation of EONET event data.
 * @property {String} _id 
 * ID for each event
 * @property {String} type 
 * GeoJSON feature type
 * @property {EventGeoJSONProperty} properties 
 * nonspacial properties of the event
 * @property {{ type: String, date: String[], coordinates: []}} geometry
 * A GeoJSON compatible geometry of event. Can be a Point, LineString, or Polygon.
 */

 /**
  * @typedef {Object} EventGeoJSONProperty
  * An object contianing nonspacial properties of the event.
  * @property {String} title 
  * Name of the event
  * @property {String} description 
  * Description of the event
  * @property {Array.<{ _id: Number }>} categories 
  * Array of IDs that specify the categories the event falls under.
  * @property {Array.<{ _id: String, title: String}>} sources 
  * Array of official sources with information on the event
  */