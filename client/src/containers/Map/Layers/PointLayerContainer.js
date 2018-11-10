import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectEvent } from '../../../state/actions/selectedEvent';
import Event from '../../../propTypes/Event';
import PointLayer from '../../../components/Map/Layers/PointLayer';


class PointLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
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
  pointEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PointLayerContainer);
