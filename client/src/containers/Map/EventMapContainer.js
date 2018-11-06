/**
 * @fileoverview Determines the onClick events for the EventMap.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getFlyToPoint from '../../utils/getFlyToPoint';
import getBoundingBox from '../../utils/getBoundingBox';
import Event from '../../propTypes/Event';
import { selectEvent } from '../../state/actions/selectedEvent';
import EventMap from '../../components/Map/EventMap';

class EventMapContainer extends React.Component {
  state = {
    // Center of the map view being shown to the user
    center: [0, 5],
    // Zoom level that the user is on
    zoom: 2,
  }

  componentDidUpdate = (prevProps) => {
    const { selectedEvent } = this.props;
    // 1. Check if selected Event is not null
    // 2. Check if prevProps is null OR selected event changed (short circuit evaluation)
    if (selectedEvent
      && (!prevProps.selectedEvent || (prevProps.selectedEvent._id !== selectedEvent._id))) {
      // Zoom into map
      this.zoomIn();
      // Update map display
      this.goToEvent();
    }
  }

  /**
   * Zooms the user into the map if they are
   * at a zoom level higher than 6. Otherwise,
   * they keep their zoom level.
   */
  zoomIn = () => {
    const { zoom } = this.state;
    if (zoom < 4) {
      this.setState({
        zoom: 4,
      });
    }
  }

  /**
   * Sends the user flying to their clicked
   * event.
   */
  goToEvent = () => {
    const { selectedEvent } = this.props;
    // If there is a selected event, fly and zoom to it
    if (selectedEvent) {
      this.setState({
        center: getFlyToPoint(selectedEvent),
      });
    }
  }

  /**
   * Updates the center state with the current
   * center of the map.
   * 
   * @param map
   *  The map instance that this event originated from. Automatically
   *  supplied by MapBox.
   */
  updateCenter = (map) => {
    this.setState({
      center: map.getCenter(),
    });
  }

  /**
   * Updates the center state with the current
   * zoom of the map.
   * 
   * @param map
   *  The map instance that this event originated from. Automatically
   *  supplied by MapBox.
   */
  updateZoom = (map) => {
    this.setState({
      zoom: map.getZoom(),
    });
  }

  render() {
    const {
      center,
      zoom,
    } = this.state;
    const {
      selectedEvent,
      setSelectedEvent,
      resetSelectedEvent,
    } = this.props;
    return (
      <EventMap
        center={center}
        zoom={[zoom]}
        setSelectedEvent={setSelectedEvent}
        resetSelectedEvent={resetSelectedEvent}
        renderPopup={!!selectedEvent}
        updateCenter={this.updateCenter}
        updateZoom={this.updateZoom}
      />
    );
  }
}

const mapStateToProps = state => ({
  // Filter events list for matching event
  selectedEvent: state.events.filter(event => event._id === state.selectedEvent)[0],
});

const mapDispatchToProps = dispatch => ({
  setSelectedEvent: (map, e) => {
    // Expand bounding box to enlarge query range
    const features = map.queryRenderedFeatures(getBoundingBox(e.point));
    // Check if closest feature comes from our event GeoJSON
    if (features[0].source.includes('geojson')) {
      // If so, set it as the selected event
      dispatch(selectEvent(features[0].properties.id));
    }
  },
  resetSelectedEvent: () => dispatch(selectEvent(null)),
});

EventMapContainer.propTypes = {
  /**
   * The current event that the user has selected.
   */
  selectedEvent: Event.isRequired,
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
  setSelectedEvent: PropTypes.func.isRequired,
  /**
   * Sets the selected event field to null.
   */
  resetSelectedEvent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventMapContainer);
