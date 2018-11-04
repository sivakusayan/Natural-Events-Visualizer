/**
 * @fileoverview Handles rendering of the map layer concerned
 * with LineString events.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';
import MAP_LINE_CONFIG from '../../../constants/MAP_LINE_CONFIG';

import Event from '../../../propTypes/Event';

class LineStringLayer extends React.Component {
  lineLayout = MAP_LINE_CONFIG.layout;

  linePaint = {
    ...MAP_LINE_CONFIG.paint,
    'line-color': {
      property: 'category',
      type: 'categorical',
      stops: Object.keys(CATEGORIES).map(key => [parseInt(key), CATEGORIES[key].color]),
    },
  }

  render() {
    const { geoJSON } = this.props;
    return (
      <GeoJSONLayer
        data={geoJSON}
        lineLayout={this.lineLayout}
        linePaint={this.linePaint}
      />
    );
  }
}

LineStringLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default LineStringLayer;
