import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getLocation from '../../utils/getLocation';
import getBoundingBox from '../../utils/getBoundingBox';
import getLatitudeShift from '../../utils/getLatitudeShift';
import Event from '../../propTypes/Event';
import { selectEvent } from '../../state/actions/selectedEvent';
import { doneLoadingMap } from '../../state/actions/loading';
import EventMap from '../../components/Map/EventMap';

class EventMapContainer extends React.Component {
  // The smallest zoom we will go when clicking on 
  // a marker in a map layer.
  baseZoom = 4

  state = {
    center: [0, 5],
    currentZoom: 2,
  }

  componentDidUpdate = (prevProps) => {
    const { selectedEvent } = this.props;
    // 1. Check if selected Event is not null
    // 2. Check if prevProps is null OR selected event changed (short circuit evaluation)
    if (selectedEvent
      && (!prevProps.selectedEvent || (prevProps.selectedEvent._id !== selectedEvent._id))) {
      this.zoomIn();
      this.goToEvent();
    }
  }

  zoomIn = () => {
    const { currentZoom } = this.state;
    if (currentZoom < this.baseZoom) {
      this.setState({
        currentZoom: this.baseZoom,
      });
    }
  }

  goToEvent = () => {
    const { selectedEvent } = this.props;
    const { currentZoom } = this.state;
    if (selectedEvent) {
      const { lng, lat } = getLocation(selectedEvent);
      this.setState({
        center: {
          lng,
          // Shift center up a little bit so we have
          // more room for the popup. 
          lat: lat + getLatitudeShift(this.baseZoom, currentZoom, lat),
        },
      });
    }
  }

  updateCenter = (map) => {
    this.setState({
      center: map.getCenter(),
    });
  }

  updateZoom = (map) => {
    this.setState({
      currentZoom: map.getZoom(),
    });
  }

  render() {
    const {
      center,
      currentZoom,
    } = this.state;
    const {
      selectedEvent,
      setSelectedEvent,
      resetSelectedEvent,
      doneLoading,
    } = this.props;
    return (
      <EventMap
        center={center}
        // Remember that mapbox zoom property is wrapped
        // inside an array.
        // https://github.com/alex3165/react-mapbox-gl/issues/57
        zoom={[currentZoom]}
        doneLoading={doneLoading}
        setSelectedEvent={setSelectedEvent}
        resetSelectedEvent={resetSelectedEvent}
        hasSelectedEvent={!!selectedEvent}
        updateCenter={this.updateCenter}
        updateZoom={this.updateZoom}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectedEvent: state.events.filter(event => event._id === state.selectedEvent)[0],
});

const mapDispatchToProps = dispatch => ({
  /**
   * Queries a bounding box around the user's click. If any
   * events are found near the click, set the nearest one
   * to be the selected event.
   * 
   * @param map
   *  The map instance that was clicked on. Automatically
   *  supplied by MapBox.
   * @param e
   *  A React event. Automatically supplied by MapBox
   */
  setSelectedEvent: (map, e) => {
    // Expand bounding box to enlarge query range
    const features = map.queryRenderedFeatures(getBoundingBox(e.point));
    // Check if closest feature comes from our event GeoJSON
    if (features[0].source.includes('geojson')) {
      dispatch(selectEvent(features[0].properties.id));
    }
  },
  resetSelectedEvent: () => dispatch(selectEvent(null)),
  doneLoading: () => dispatch(doneLoadingMap()),
});

EventMapContainer.propTypes = {
  selectedEvent: Event.isRequired,
  setSelectedEvent: PropTypes.func.isRequired,
  resetSelectedEvent: PropTypes.func.isRequired,
  doneLoading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventMapContainer);
