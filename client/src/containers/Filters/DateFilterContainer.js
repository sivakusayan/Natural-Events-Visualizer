import { connect } from 'react-redux';

import { setStartDate, setEndDate } from '../../state/actions/filters';
import { toggleStartDate, toggleEndDate } from '../../state/actions/filtersAreActive';
import DateFilter from '../../components/Filters/DateFilter';

const mapStateToProps = state => ({
  startDateFilter: state.filters.startDate,
  endDateFilter: state.filters.endDate,
  isActive: state.filtersAreActive.startDate && state.filtersAreActive.endDate,
});

const mapDispatchToProps = dispatch => ({
  setStartDate: (year, month) => {
    console.log(year);
    console.log(month);
  },
  setEndDate: (year, month) => {
    console.log(year);
    console.log(month);
  },
  toggleDate: () => {
    dispatch(toggleStartDate());
    dispatch(toggleEndDate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
