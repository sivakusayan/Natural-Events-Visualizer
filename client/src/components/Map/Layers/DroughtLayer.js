/**
 * @fileoverview Handles rendering of the map layer concerned
 * with drought events.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';
import MAP_POLYGON_CONFIG from '../../../constants/MAP_POLYGON_CONFIG';
import MAP_LINE_CONFIG from '../../../constants/MAP_LINE_CONFIG';

import Event from '../../../propTypes/Event';

class DroughtLayer extends React.Component {
  circlePaint = { 
    'circle-color': CATEGORIES[6].color.
  };

  linePaint = {
    ...MAP_LINE_CONFIG.paint,
    'line-color': CATEGORIES[6].color,
  }

  fillPaint = {
    ...MAP_POLYGON_CONFIG.paint,
    'fill-color': CATEGORIES[6].color,
  }
  
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

DroughtLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default DroughtLayer;
