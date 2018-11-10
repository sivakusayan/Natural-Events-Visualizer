/**
 * @fileoverview A PropTypes implementation of EventGeoJSON from the JSDocTypes.
 */

import PropTypes from 'prop-types';

const Event = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  type: 'Feature',
  geometry: PropTypes.shape({
    type: PropTypes.oneOf(['Point', 'Polygon', 'LineString']).isRequired,
    date: PropTypes.arrayOf(PropTypes.number).isRequired,
    coordinates: PropTypes.oneOfType([
      // If geometry is a Point
      PropTypes.arrayOf(PropTypes.number),
      // If geometry is a Polygon
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
      // If geometry is a LineString
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    ]).isRequired,
    location: PropTypes.arrayOf(PropTypes.shape({
      // The first three properties are used if event is on land.
      city: PropTypes.string,
      province: PropTypes.string,
      country: PropTypes.string,
      // Else this property is used to get the point's water body.
      waters: PropTypes.string,
    })).isRequired,
  }).isRequired,
  properties: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired,
    sources: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
});

export default Event;
