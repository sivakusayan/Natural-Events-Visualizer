/**
 * Passes data that should be rendered into the Polygon layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import PolygonLayer from '../../components/Map/Layers/PolygonLayer';

class PolygonLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for Polygon events
    features: this.props.events.filter(event => event.geometry.type === 'Polygon'),
  }

  render() {
    return (
      <PolygonLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

PolygonLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(PolygonLayerContainer);
