/**
 * Passes data that should be rendered into the earthquakes layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import EarthquakesLayer from '../../components/Map/Layers/EarthquakesLayer';

class EarthquakesLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 7 (Dust and Haze)
    features: this.props.events.filter(event => event.properties.categories.includes(8)),
  }

  render() {
    return (
      <EarthquakesLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

EarthquakesLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(EarthquakesLayerContainer);
