/**
 * @fileoverview Handles rendering of the map layer concerned
 * with polygon events.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';
import MAP_POLYGON_CONFIG from '../../../constants/MAP_POLYGON_CONFIG';

import Event from '../../../propTypes/Event';

class PolygonLayer extends React.Component {
  fillPaint = {
    ...MAP_POLYGON_CONFIG.paint,
    'fill-color': {
      property: 'category',
      type: 'categorical',
      // Generate stops using colors already defined in CATEGORIES object
      stops: Object.keys(CATEGORIES).map(key => [parseInt(key), CATEGORIES[key].color]),
    },
  }

  render() {
    const { geoJSON } = this.props;
    return (
      <GeoJSONLayer
        data={geoJSON}
        fillPaint={this.fillPaint}
      />
    );
  }
}

PolygonLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default PolygonLayer;
