/**
 * @fileoverview Determines the onClick events for the EventMap.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import pointMean from '../../../../utils/pointMean';
import getBoundingBox from '../../../../utils/getBoundingBox';
import Event from '../../propTypes/Event';
import { selectEvent } from '../../state/actions/selectedEvent';
import EventMap from '../../components/Map/EventMap';

class EventMapContainer extends React.Component {
  state = {
    // Center of the map view being shown to the user
    center: [0, 0],
    // Zoom level that the user is on
    zoom: 2,
  }

  /**
   * Takes in an event, and returns a suitable point
   * for the map to show the user for that event.
   * 
   * @param {EventGeoJSON} event 
   *  The event to find the flyTo point for
   * 
   * @returns
   *  A suitable flyTo point
   */
  getFlyToPoint = (event) => {
    const { geometry } = event;
    let point = null;
    // If Point, just return that point itself
    if (geometry.type === 'Point') {
      point = geometry.coordinates;
    }
    // If LineString, return the most recent (last) point
    if (geometry.type === 'LineString') {
      point = geometry.coordinates[geometry.coordinates.length - 1];
    }
    // If Polygon, return the average of its vertices
    if (geometry.type === 'Polygon') {
      point = pointMean(geometry.coordinates[0]);
    }
    return {
      lng: point[0],
      lat: point[1],
    };
  }

  /**
   * Zooms the user into the map if they are
   * at a zoom level higher than 6. Otherwise,
   * they keep their zoom level.
   */
  zoomIn = () => {
    const { zoom } = this.state;
    if (zoom < 6) {
      this.setState({
        zoom: 6,
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
        center: this.getFlyToPoint(selectedEvent),
      });
    }
  }

  /**
   * Fires when the user clicks on the map. Checks if they
   * clicked on an event, and if they did, zooms in onto
   * that event. Otherwise, does nothing.
   * 
   * @param map
   *  The map instance that was clicked on. Automatically
   *  supplied by MapBox.
   * @param e
   *  A React event. Automatically supplied by MapBox
   */
  onMapClick = (map, e) => {
    const { setSelectedEvent } = this.props;
    // Set any events to be selected, if there are any 
    setSelectedEvent(map, e);
    // Zoom into map
    this.zoomIn();
    // Update map display
    this.goToEvent();
  }

  /**
   * Resets the selected event field if the user
   * attempts to click away.
   */
  onMouseDown = () => {
    const { resetSelectedEvent } = this.props;
    // Remove any lingering selected events
    resetSelectedEvent();
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
    return (
      <EventMap
        center={center}
        zoom={zoom}
        onMapClick={this.onMapClick}
        onMouseDown={this.onMouseDown}
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
