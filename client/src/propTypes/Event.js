/**
 * A PropTypes implementation of EventGeoJSON from the JSDocTypes.
 */

import PropTypes from 'prop-types';

const Event = PropTypes.shape({
  /**
   *  The unique id of the event, specified by the EONET API.
   */ 
  _id: PropTypes.number.isRequired,
  /**
   * Marks this as a feature for GeoJSON parsing.
   */
  type: 'Feature',
  /**
   * Contains spacetime data about the event
   */
  geometry: PropTypes.shape({
    type: PropTypes.oneOf(['Point', 'Polygon', 'LineString']).isRequired,
    date: PropTypes.oneOfType([
      // Will have only one date if Point or Polygon
      PropTypes.number.isRequired,
      // Will have multiple dates if LineString, associated with multiple locations
      PropTypes.arrayOf(PropTypes.number).isRequired,
    ]).isRequired,
    coordinates: PropTypes.oneOfType([
      // If geometry is a Point
      PropTypes.arrayOf(PropTypes.number),
      // If geometry is a Polygon
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
      // If geometry is a LineString
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    ]).isRequired,
    location: PropTypes.shape({
      // The first three properties are used if event is on significant land.
      city: PropTypes.string,
      province: PropTypes.string,
      country: PropTypes.string,
      // Else these two properties if event is on water/minor island.
      waters: PropTypes.string,
      onIsland: PropTypes.boolean,
    }).isRequired,
  }).isRequired,
  /**
   * Contains non-spacial data about the event.
   */
  properties: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    sources: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
});

export default Event;
