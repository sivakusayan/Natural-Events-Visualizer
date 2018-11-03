/**
 * Passes data that should be rendered into the landslides layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import LandslidesLayer from '../../components/Map/Layers/LandslidesLayer';

class LandslidesLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 14 (Landslides)
    features: this.props.events.filter(event => event.properties.categories.includes(14)),
  }

  render() {
    return (
      <LandslidesLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

LandslidesLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(LandslidesLayerContainer);
