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

import COLOR_STOPS from '../../../constants/map/COLOR_STOPS';
import MAP_CIRCLE_CONFIG from '../../../constants/map/MAP_CIRCLE_CONFIG';
import Event from '../../../propTypes/Event';

class LineStringEndpointsLayer extends React.Component {
  circlePaint = {
    ...MAP_CIRCLE_CONFIG.paint,
    'circle-color': COLOR_STOPS,
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
  geoJSON: PropTypes.shape({
    type: 'FeatureCollection',
    features: PropTypes.arrayOf(Event),
  }).isRequired,
};

export default LineStringEndpointsLayer;
