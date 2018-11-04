/**
 * @fileoverview Handles rendering of the map layer concerned
 * with earthquake events.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../../../constants/CATEGORIES';
import MAP_POLYGON_CONFIG from '../../../constants/MAP_POLYGON_CONFIG';
import MAP_LINE_CONFIG from '../../../constants/MAP_LINE_CONFIG';

import Event from '../../../propTypes/Event';

class EarthquakesLayer extends React.Component {
  circleLayout = { visibility: 'visible' };

  circlePaint = { 'circle-color': 'brown' };

  render() {
    const { geoJSON } = this.props;
    return (
      <GeoJSONLayer
        data={geoJSON}
        circleLayout={this.circleLayout}
        circlePaint={this.circlePaint}
      />
    );
  }
}

EarthquakesLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default EarthquakesLayer;
