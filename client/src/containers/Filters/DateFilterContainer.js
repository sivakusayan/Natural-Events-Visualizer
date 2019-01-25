import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { setStartDate, setEndDate } from '../../state/actions/filters';
import { toggleStartDate, toggleEndDate } from '../../state/actions/filtersAreActive';
import DateFilter from '../../components/Filters/DateFilter';

const mapStateToProps = state => ({
  startDate: {
    year: dayjs(state.filters.startDate).year(),
    // Add 1 month since dayjs indexes months from 0 through 11
    month: dayjs(state.filters.startDate).month() + 1,
  },
  endDate: {
    year: dayjs(state.filters.endDate).year(),
    month: dayjs(state.filters.endDate).month() + 1,
  },
  isActive: state.filtersAreActive.startDate && state.filtersAreActive.endDate,
});

const mapDispatchToProps = dispatch => ({
  setStartDate: (year, month) => {
    // Javascript Date months indexed by 0-11, subtract 1 to compensate. This 
    // will return a date object at the beginning of the given month and year.
    const startDate = dayjs(new Date(year, month - 1)).valueOf();
    dispatch(setStartDate(startDate));
  },
  setEndDate: (year, month) => {
    // Javascript Date months indexed by 0-11, subtract 1 to compensate.
    const endDate = dayjs(new Date(year, month - 1)).endOf('month').valueOf();
    dispatch(setEndDate(endDate));
  },
  toggle: () => {
    dispatch(toggleStartDate());
    dispatch(toggleEndDate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
