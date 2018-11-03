/**
 * Passes data that should be rendered into the volcanoes layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import VolcanoesLayer from '../../components/Map/Layers/VolcanoesLayer';

class VolcanoesLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 12 (Volcanoes)
    features: this.props.events.filter(event => event.properties.categories.includes(12)),
  }

  render() {
    return (
      <VolcanoesLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

VolcanoesLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(VolcanoesLayerContainer);
