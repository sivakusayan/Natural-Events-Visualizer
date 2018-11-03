/**
 * Passes data that should be rendered into the floods layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import FloodsLayer from '../../components/Map/Layers/FloodsLayer';

class FloodsLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 9 (Floods)
    features: this.props.events.filter(event => event.properties.categories.includes(9)),
  }

  render() {
    return (
      <FloodsLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

FloodsLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(FloodsLayerContainer);
