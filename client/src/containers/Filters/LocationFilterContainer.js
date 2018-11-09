/**
 * Allows the LocationFilter to set location parameters
 * in the state's filters field.
 */

import { connect } from 'react-redux';

import { setLatitude, setLongitude, setRadius } from '../../state/actions/filters';
import { toggleLocation } from '../../state/actions/filtersAreActive';
import LocationFilter from '../../components/Filters/LocationFilter';

const mapStateToProps = state => ({
  filter: state.filters.location,
  isActive: state.filtersAreActive.location,
});

const mapDispatchToProps = dispatch => ({
  setLatitude: latitude => dispatch(setLatitude(latitude)),
  setLongitude: longitude => dispatch(setLongitude(longitude)),
  setRadius: radius => dispatch(setRadius(radius)),
  toggle: () => dispatch(toggleLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);
