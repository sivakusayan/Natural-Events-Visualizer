/**
 * Passes data that should be rendered into the snow layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import SnowLayer from '../../components/Map/Layers/SnowLayer';

class SnowLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 17 (Snow)
    features: this.props.events.filter(event => event.properties.categories.includes(17)),
  }

  render() {
    return (
      <SnowLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

SnowLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(SnowLayerContainer);
