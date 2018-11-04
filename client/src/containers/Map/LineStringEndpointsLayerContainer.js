/**
 * Passes data that should be rendered into the LineStringEndpoints layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import LineStringEndpointsLayer from '../../components/Map/Layers/LineStringEndpointsLayer';

/**
 * Given a lineString EventGeoJSON object, return a GeoJSON point
 * that is at the most recent location.
 * 
 * @param {EventGeoJSON} LineStringEndpoints
 *  A LineStringEndpoints EventGeoJSON object
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
    endPointTo: lineString._id,
    category: lineString.properties.category,
  },
});

class LineStringEndpointsLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Concatenate line string events with their generated endpoints
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
  /**
   * The list of all LineStringEndpoints events in the database.
   */
  lineStringEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(LineStringEndpointsLayerContainer);
