/**
 * @fileoverview Determines the onClick events for the EventMap.
 */

import React from 'react';
import { connect } from 'react-redux';

import { selectEvent } from '../../state/actions/selectedEvent';

import EventMap from '../../components/Map/EventMap';

/**
 * Takes a point, and returns a bounding box with specified
 * side length that surrounds that point.
 * 
 * @param {{ x: Number, y: Number}} point 
 *  The point to get the bounding box of
 * @param {Number} boxLength 
 *  The side length of the bounding box
 * 
 * @returns {Number[][]}
 *  A bounding box around the point
 */
const getBoundingBox = (point, boxLength = 10) => {
  const moveBy = boxLength / 2;
  return [[
    point.x - moveBy,
    point.y - moveBy,
  ], [
    point.x + moveBy,
    point.y + moveBy,
  ]];
}

class EventMapContainer extends React.Component {
  onMapClick = (map, e) => {
    // Expand bounding box to enlarge query range
    const features = map.queryRenderedFeatures(getBoundingBox(e.point));
    // Check if closest feature comes from our event GeoJSON
    if (features[0].source.includes('geojson')) {
      console.log('Clicked the point :)');
    }
  };

  render() {
    return (
      <EventMap onMapClick={this.onMapClick} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectEvent: eventID => dispatch(selectEvent(eventID)),
});

export default connect(null, mapDispatchToProps)(EventMapContainer);
