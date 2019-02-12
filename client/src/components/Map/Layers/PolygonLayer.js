import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import COLOR_STOPS from '../../../constants/map/COLOR_STOPS';
import MAP_POLYGON_CONFIG from '../../../constants/map/MAP_POLYGON_CONFIG';

import Event from '../../../propTypes/Event';

class PolygonLayer extends React.Component {
  fillPaint = {
    ...MAP_POLYGON_CONFIG.paint,
    'fill-color': COLOR_STOPS,
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
  geoJSON: PropTypes.shape({
    type: 'FeatureCollection',
    features: PropTypes.arrayOf(Event),
  }).isRequired,
};

export default PolygonLayer;
