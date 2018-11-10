import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../../propTypes/Event';
import LineStringEndpointsLayer from '../../../components/Map/Layers/LineStringEndpointsLayer';

/**
 * Given a lineString EventGeoJSON object, return a GeoJSON point
 * that is at the most recent location.
 * 
 * @param {EventGeoJSON} LineString
 *  A LineString EventGeoJSON object
 * 
 * @returns {EventGeoJSONEndpoint} 
 *  The endpoint of the line
 */
const getEndPointGeoJSON = lineString => ({
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: lineString.geometry.coordinates[lineString.geometry.coordinates.length - 1],
  },
  properties: {
    id: lineString._id,
    category: lineString.properties.category,
  },
});

class LineStringEndpointsLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    features: this.props.lineStringEvents.map(event => getEndPointGeoJSON(event)),
  }

  render() {
    return (
      <LineStringEndpointsLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  lineStringEvents: state.events.filter(event => event.geometry.type === 'LineString'),
});

LineStringEndpointsLayerContainer.propTypes = {
  lineStringEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(LineStringEndpointsLayerContainer);
