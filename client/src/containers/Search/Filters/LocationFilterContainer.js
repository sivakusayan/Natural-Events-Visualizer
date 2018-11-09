/**
 * Allows the LocationFilter to set location parameters
 * in the state's filters field.
 */

import { connect } from 'react-redux';

import { setLatitude, setLongitude, setRadius } from '../../../state/actions/filters';
import LocationFilter from '../../../components/Search/Filters/LocationFilter';

const mapStateToProps = state => ({
  filters: state.filters.location,
});

const mapDispatchToProps = dispatch => ({
  setLatitude: latitude => dispatch(setLatitude(latitude)),
  setLongitude: longitude => dispatch(setLongitude(longitude)),
  setRadius: radius => dispatch(setRadius(radius)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);
