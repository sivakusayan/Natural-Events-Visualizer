/**
 * Passes data that should be rendered into the drought layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import DroughtLayer from '../../components/Map/Layers/DroughtLayer';

class DroughtLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 6 (Drought)
    features: this.props.events.filter(event => event.properties.categories.includes(6)),
  }

  render() {
    return (
      <DroughtLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

DroughtLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(DroughtLayerContainer);
