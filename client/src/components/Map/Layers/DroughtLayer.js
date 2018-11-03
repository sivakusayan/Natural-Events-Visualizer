/**
 * @fileoverview Handles rendering of the map layer concerned
 * with drought events.
 */
import React from 'react';
import { GeoJSONLayer } from 'react-mapbox-gl';

class DroughtLayer extends React.Component {
  circleLayout = { visibility: 'visible' };

  circlePaint = { 'circle-color': 'red' };

  render() {
    return (
      <GeoJSONLayer
        data={this.props.geoJSON}
        circleLayout={this.circleLayout}
        circlePaint={this.circlePaint}
      />
    );
  }
}

export default DroughtLayer;
