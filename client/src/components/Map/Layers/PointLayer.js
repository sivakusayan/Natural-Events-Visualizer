import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import COLOR_STOPS from '../../../constants/map/COLOR_STOPS';
import MAP_CIRCLE_CONFIG from '../../../constants/map/MAP_CIRCLE_CONFIG';

import Event from '../../../propTypes/Event';

class PointLayer extends React.Component {
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

PointLayer.propTypes = {
  geoJSON: PropTypes.shape({
    type: 'FeatureCollection',
    features: PropTypes.arrayOf(Event),
  }).isRequired,
};

export default PointLayer;
