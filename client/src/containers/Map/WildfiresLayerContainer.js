/**
 * Passes data that should be rendered into the wildfires layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import WildfiresLayer from '../../components/Map/Layers/WildfiresLayer';

class WildFiresLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 8 (Wildfires)
    features: this.props.events.filter(event => event.properties.categories.includes(8)),
  }

  render() {
    return (
      <WildfiresLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

WildFiresLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(WildFiresLayerContainer);
