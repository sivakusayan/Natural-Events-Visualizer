import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import CATEGORIES from '../../../constants/CATEGORIES';
import MAP_POLYGON_CONFIG from '../../../constants/MAP_POLYGON_CONFIG';

import Event from '../../../propTypes/Event';

class PolygonLayer extends React.Component {
  fillPaint = {
    ...MAP_POLYGON_CONFIG.paint,
    // Generate stops using colors already defined in CATEGORIES object
    'fill-color': {
      property: 'category',
      type: 'categorical',
      // Parse int to prevent type coercion to string
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
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default PolygonLayer;
