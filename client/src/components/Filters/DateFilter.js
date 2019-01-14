import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';

const mrange = {
  from: {year: 2014, month: 8}, 
  to: {year: 2015, month: 5}
};

const pickerLang = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  from: 'From', to: 'To',
}

class DateFilter extends React.Component {
  state = {
    isShown: true,
  }

  onChange = (year, month, id) => {
    const { setStartDate, setEndDate } = this.props;
    // ID is 0 if startDate was changed, and 1 if endDate was changed
    if (id === 0) return setStartDate(year, month);
    setEndDate(year, month);
  }
  
  render() {
    const {
      startDateFilter,
      endDateFilter,
      toggleDate,
      isActive,
    } = this.props;
    const { isShown } = this.state;
    return (
      <section>
        <h1>Date Filters</h1>
        <form>
          <div
            tabIndex={0}
            onClick={toggleDate}
            onKeyPress={toggleDate}
            role='menuItem'
          >
            <h1>Date</h1>
          </div>
          <Picker 
            lang={pickerLang}
            years={({min: 2010, max: 2018})}
            range={mrange}
            onChange={this.onChange}
            show={isShown}
          />
        </form>
      </section>
    )
  }
}

DateFilter.propTypes = {
  /**
   * The unix time stamp date in milliseconds used
   * for the start date filter.
   */
  startDateFilter: PropTypes.number.isRequired,
  /**
   * The unix time stamp date in milliseconds used
   * for the start end filter.
   */
  endDateFilter: PropTypes.number.isRequired,
  /**
   * Sets the date to use in the start date filter.
   * Input is in time stamp format (milliseconds).
   */
  setStartDate: PropTypes.func.isRequired,
  /**
   * Sets the date to use in the end date filter.
   * Input is in time stamp format (milliseconds).
   */
  setEndDate: PropTypes.func.isRequired,
  /**
   * True if the date filters are currently being applied,
   * false otherwise.
   */
  IsActive: PropTypes.bool,
  /**
   * Toggles the startDateIsActive and endDateIsActive values
   */
  toggleDate: PropTypes.bool.isRequired,
};

DateFilter.defaultProps = {
  startDateIsActive: false,
  endDateIsActive: false,
};

export default DateFilter;
