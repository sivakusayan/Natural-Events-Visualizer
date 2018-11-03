/**
 * Passes data that should be rendered into the temperature extremes layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import TemperatureExtremesLayer from '../../components/Map/Layers/TemperatureExtremesLayer';

class TemperatureExtremesLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 18 (Temperature Extremes)
    features: this.props.events.filter(event => event.properties.categories.includes(18)),
  }

  render() {
    return (
      <TemperatureExtremesLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

TemperatureExtremesLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(TemperatureExtremesLayerContainer);
