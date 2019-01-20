import { connect } from 'react-redux';

import EventPopup from '../../components/Map/EventPopup';
import getLocation from '../../utils/getLocation';

const mapStateToProps = state => ({
  selectedEvent: state.events.filter(event => event._id === state.selectedEvent)[0],
  coordinates: getLocation(state.events.filter(event => event._id === state.selectedEvent)[0]),
});

export default connect(mapStateToProps)(EventPopup);
