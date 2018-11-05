/**
 * Passes data that should be rendered into the Polygon layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../../propTypes/Event';

import PolygonLayer from '../../../components/Map/Layers/PolygonLayer';

class PolygonLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for Polygon events
    features: this.props.polygonEvents,
  }

  render() {
    return (
      <PolygonLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  polygonEvents: state.events.filter(event => event.geometry.type === 'Polygon'),
});

PolygonLayerContainer.propTypes = {
  /**
   * The list of all polygon events in the database.
   */
  polygonEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(PolygonLayerContainer);
