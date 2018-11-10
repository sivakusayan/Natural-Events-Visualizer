import React from 'react';
import PropTypes from 'prop-types';
import { GeoJSONLayer } from 'react-mapbox-gl';

import COLOR_STOPS from '../../../constants/COLOR_STOPS';
import MAP_LINE_CONFIG from '../../../constants/MAP_LINE_CONFIG';
import Event from '../../../propTypes/Event';

class LineStringLayer extends React.Component {
  lineLayout = MAP_LINE_CONFIG.layout;

  linePaint = {
    ...MAP_LINE_CONFIG.paint,
    'line-color': COLOR_STOPS,
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
  geoJSON: PropTypes.arrayOf(Event).isRequired,
};

export default LineStringLayer;
