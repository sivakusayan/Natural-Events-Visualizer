/**
 * Passes data that should be rendered into the LineString layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import LineStringLayer from '../../components/Map/Layers/LineStringLayer';

class LineStringLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Concatenate line string events with their generated endpoints
    features: this.props.lineStringEvents,

  }

  render() {
    return (
      <LineStringLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  lineStringEvents: state.events.filter(event => event.geometry.type === 'LineString'),
});

LineStringLayerContainer.propTypes = {
  /**
   * The list of all LineString events in the database.
   */
  lineStringEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(LineStringLayerContainer);
