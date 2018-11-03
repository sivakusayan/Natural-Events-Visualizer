/**
 * Passes data that should be rendered into the severe storms layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import SevereStormsLayer from '../../components/Map/Layers/SevereStormsLayer';

class SevereStormsLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 10 (Severe Storms)
    features: this.props.events.filter(event => event.properties.categories.includes(10)),
  }

  render() {
    return (
      <SevereStormsLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

SevereStormsLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(SevereStormsLayerContainer);
