/**
 * Passes data that should be rendered into the wildfires layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import WaterColorLayer from '../../components/Map/Layers/WaterColorLayer';

class WaterColorLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 13 (Water Color)
    features: this.props.events.filter(event => event.properties.categories.includes(13)),
  }

  render() {
    return (
      <WaterColorLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

WaterColorLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(WaterColorLayerContainer);
