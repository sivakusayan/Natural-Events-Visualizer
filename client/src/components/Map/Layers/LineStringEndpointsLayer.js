/**
 * @fileoverview Handles rendering of the map layer concerned
 * with the endpoints of line strings.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';

import Event from '../../../propTypes/Event';

class LineStringEndpointsLayer extends React.Component {
  circlePaint = { 
    'circle-color': {
      property: 'category',
      type: 'categorical',
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
