/**
 * Passes data that should be rendered into the point layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectEvent } from '../../../state/actions/selectedEvent';

import Event from '../../../propTypes/Event';

import PointLayer from '../../../components/Map/Layers/PointLayer';


class PointLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for Point events
    features: this.props.pointEvents,
  }

  render() {
    return (
      <PointLayer
        geoJSON={this.geoJSON}
        onClickPoint={this.onClickPoint}
      />
    );
  }
}

const mapStateToProps = state => ({
  pointEvents: state.events.filter(event => event.geometry.type === 'Point'),
});

const mapDispatchToProps = dispatch => ({
  setSelectedEvent: eventID => dispatch(selectEvent(eventID)),
});

PointLayerContainer.propTypes = {
  /**
   * The list of all point events in the database.
   */
  pointEvents: PropTypes.arrayOf(Event).isRequired,
  /**
   * Set the selected event for the application.
   */
  setSelectedEvent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PointLayerContainer);
