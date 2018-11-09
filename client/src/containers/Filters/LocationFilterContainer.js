/**
 * Allows the LocationFilter to set location parameters
 * in the state's filters field.
 */

import { connect } from 'react-redux';

<<<<<<< HEAD:client/src/containers/Filters/LocationFilterContainer.js
import { setLatitude, setLongitude, setRadius } from '../../state/actions/filters';
import { toggleLocation } from '../../state/actions/filtersAreActive';
import LocationFilter from '../../components/Filters/LocationFilter';
=======
import { setLatitude, setLongitude, setRadius } from '../../../state/actions/filters';
import { toggleLocation } from '../../../state/actions/filtersAreActive';
import LocationFilter from '../../../components/Search/Filters/LocationFilter';
>>>>>>> fa77ac020419527358b1d6243f0d163bed492143:client/src/containers/Search/Filters/LocationFilterContainer.js

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
