/**
 * Passes data that should be rendered into the sea and lake ice layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import SeaAndLakeIceLayer from '../../components/Map/Layers/SeaAndLakeIceLayer';

class SeaAndLakeIceLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 15 (Sea and Lake Ice)
    features: this.props.events.filter(event => event.properties.categories.includes(15)),
  }

  render() {
    return (
      <SeaAndLakeIceLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

SeaAndLakeIceLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(SeaAndLakeIceLayerContainer);
