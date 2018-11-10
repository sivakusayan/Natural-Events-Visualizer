import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';
import MAP_CIRCLE_CONFIG from '../../../constants/MAP_CIRCLE_CONFIG';

import Event from '../../../propTypes/Event';

class PointLayer extends React.Component {
  circlePaint = {
    ...MAP_CIRCLE_CONFIG.paint,
    // Generate stops using colors already defined in CATEGORIES object
    'circle-color': {
      property: 'category',
      type: 'categorical',
      // Parse int to prevent type coercion to string
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

PointLayer.propTypes = {
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default PointLayer;
