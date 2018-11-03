/**
 * @fileoverview Handles rendering of the map layer concerned
 * with sea and lake ice events.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import Event from '../../../propTypes/Event';

class SeaAndLakeIceLayer extends React.Component {
  linePaint = {
    'line-color': 'blue',
  }

  render() {
    const { geoJSON } = this.props;
    return (
      <GeoJSONLayer
        data={geoJSON}
        linePaint={this.linePaint}
      />
    );
  }
}

SeaAndLakeIceLayer.propTypes = {
  /**
   * The geoJSON data used to render this layer.
   */
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default SeaAndLakeIceLayer;
