/**
 * Allows the DateFilter to change the start and end dates used
 * in the state's filters field.
 */

import { connect } from 'react-redux';

import { setStartDate, setEndDate } from '../../state/actions/filters';
import { toggleStartDate, toggleEndDate } from '../../state/actions/filtersAreActive';
import DateFilter from '../../components/Filters/DateFilter';

const mapStateToProps = state => ({
  startDateFilter: state.filters.startDate,
  endDateFilter: state.filters.endDate,
  startDateIsActive: state.filtersAreActive.startDate,
  endDateIsActive: state.filtersAreActive.endDate,
});

const mapDispatchToProps = dispatch => ({
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date)),
  toggleStartDate: () => dispatch(toggleStartDate()),
  toggleEndDate: () => dispatch(toggleEndDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
