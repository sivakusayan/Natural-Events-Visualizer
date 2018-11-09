/**
 * Allows the DateFilter to change the start and end dates used
 * in the state's filters field.
 */

import { connect } from 'react-redux';

import { setStartDate, setEndDate } from '../../../state/actions/filters';
import DateFilter from '../../../components/Search/Filters/DateFilter';

const mapStateToProps = state => ({
  filters: {
    startDate: state.filters.startDate,
    endDate: state.filters.endDate,
  },
});

const mapDispatchToProps = dispatch => ({
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
