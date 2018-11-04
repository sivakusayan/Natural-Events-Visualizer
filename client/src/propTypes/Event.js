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
    /**
     * Only one element if geometry is point or polygon, will have many elements if LineString
     */
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    coordinates: PropTypes.oneOfType([
      // If geometry is a Point
      PropTypes.arrayOf(PropTypes.number),
      // If geometry is a Polygon
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
      // If geometry is a LineString
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    ]).isRequired,
    /**
     * Only one location if geometry is point or polygon, will have many locations if LineString
     */
    location: PropTypes.arrayOf(PropTypes.shape({
      // The first three properties are used if event is on land.
      city: PropTypes.string,
      province: PropTypes.string,
      country: PropTypes.string,
      // Else this property is used to get the point's water body.
      waters: PropTypes.string,
    })).isRequired,
  }).isRequired,
  /**
   * Contains non-spacial data about the event.
   */
  properties: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired,
    sources: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
});

export default Event;
