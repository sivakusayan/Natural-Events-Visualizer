/**
 * @fileoverview Handles rendering of the map layer concerned
 * with severe storm events.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import Event from '../../../propTypes/Event';

class SevereStormsLayer extends React.Component {
  circleLayout = { visibility: 'visible' };

  circlePaint = { 'circle-color': 'red' };

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

SevereStormsLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default SevereStormsLayer;
