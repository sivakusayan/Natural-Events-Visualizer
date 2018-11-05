/**
 * @fileoverview Determines the onClick events for the EventMap.
 */

import { connect } from 'react-redux';

import getBoundingBox from '../../../../utils/getBoundingBox';
import { selectEvent } from '../../state/actions/selectedEvent';
import EventMap from '../../components/Map/EventMap';

const mapStateToProps = state => ({
  // Filter events list for matching event
  selectedEvent: state.events.filter(event => event._id === state.selectedEvent)[0],
});

const mapDispatchToProps = dispatch => ({
  onMapClick: (map, e) => {
    // Expand bounding box to enlarge query range
    const features = map.queryRenderedFeatures(getBoundingBox(e.point));
    // Check if closest feature comes from our event GeoJSON
    if (features[0].source.includes('geojson')) {
      // If so, set it as the selected event
      dispatch(selectEvent(features[0].properties.id));
    }
  },
  onDragStart: () => dispatch(selectEvent(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventMap);
