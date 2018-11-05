/**
 * @fileoverview Handles rendering of the map layer concerned
 * with the most recent endpoint of line strings. 
 * 
 * This layer was made independently because circle painting in the
 * LineString layer also colors all of the points that defines that 
 * LineString. This creates unnecessary clutter for the user, and 
 * so we only use the endpoint to mark the 'end' of the line.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';
import MAP_CIRCLE_CONFIG from '../../../constants/MAP_CIRCLE_CONFIG';

import Event from '../../../propTypes/Event';

class LineStringEndpointsLayer extends React.Component {
  circlePaint = { 
    ...MAP_CIRCLE_CONFIG.paint,
    // Generate stops using colors already defined in CATEGORIES object
    'circle-color': {
      property: 'category',
      type: 'categorical',
      // Parse int to prevent type coercion to string
      stops: Object.keys(CATEGORIES).map(key => [parseInt(key), CATEGORIES[key].color]),
    },
  };

  render() {
    const { geoJSON } = this.props;
    return (
      <GeoJSONLayer
        data={geoJSON}
        circlePaint={this.circlePaint}
      />
    );
  }
}

LineStringEndpointsLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default LineStringEndpointsLayer;
