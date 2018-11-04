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
    // Filter for LineString events
    features: this.props.events.filter(event => event.geometry.type === 'LineString'),
  }

  render() {
    return (
      <LineStringLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

LineStringLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(LineStringLayerContainer);
