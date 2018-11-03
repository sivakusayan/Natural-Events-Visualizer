/**
 * Passes data that should be rendered into the dust and haze layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import DustAndHazeLayer from '../../components/Map/Layers/DustAndHazeLayer';

class DustAndHazeLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 7 (Dust and Haze)
    features: this.props.events.filter(event => event.properties.categories.includes(7)),
  }

  render() {
    return (
      <DustAndHazeLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

DustAndHazeLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(DustAndHazeLayerContainer);
