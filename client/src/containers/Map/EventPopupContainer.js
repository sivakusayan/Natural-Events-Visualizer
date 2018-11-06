/**
 * Controls where and when the popup is rendered.
 */

import { connect } from 'react-redux';

import EventPopup from '../../components/Map/EventPopup';
import getFlyToPoint from '../../utils/getFlyToPoint';

const mapStateToProps = state => ({
  // Filter events list for matching event
  selectedEvent: state.events.filter(event => event._id === state.selectedEvent)[0],
  // Render the popup at the same coordinates the map is flying to
  coordinates: getFlyToPoint(state.events.filter(event => event._id === state.selectedEvent)[0]),
});

export default connect(mapStateToProps)(EventPopup);
