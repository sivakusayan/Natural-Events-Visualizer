import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({
  startDateFilter,
  endDateFilter,
  setStartDate,
  setEndDate,
  toggleStartDate,
  startDateIsActive = false,
  toggleEndDate,
  endDateIsActive = false,
}) => (
  <section>
    <h1>Date Filters</h1>
    <form>
      <div
        tabIndex={0}
        onClick={toggleStartDate}
        onKeyPress={toggleStartDate}
        role='menuItem'
      >
        <h1>Start Date</h1>
      </div>
      <DatePicker
        selected={moment(startDateFilter)}
        selectsStart
        startDate={moment(startDateFilter)}
        endDate={moment(endDateFilter)}
        onChange={date => setStartDate(moment(date).valueOf())}
        disabled={!startDateIsActive}
      />
      <div
        tabIndex={0}
        onClick={toggleEndDate}
        onKeyPress={toggleEndDate}
        role='menuItem'
      >
        <h1>Start Date</h1>
      </div>
      <DatePicker
        selected={moment(endDateFilter)}
        selectsEnd
        startDate={moment(startDateFilter)}
        endDate={moment(endDateFilter)}
        onChange={date => setEndDate(moment(date).valueOf())}
        disabled={!endDateIsActive}
      />
    </form>
  </section>
);

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
   * True if the startDate filter is currently being applied,
   * false otherwise.
   */
  startDateIsActive: PropTypes.bool,
  /**
   * Toggles the startDateIsActive value
   */
  toggleStartDate: PropTypes.bool.isRequired,
  /**
   * True if the endDate filter is currently being applied,
   * false otherwise.
   */
  endDateIsActive: PropTypes.bool,
  /**
   * Toggles the endDateIsActive filter
   */
  toggleEndDate: PropTypes.bool.isRequired,
};

DateFilter.defaultProps = {
  startDateIsActive: false,
  endDateIsActive: false,
};

export default DateFilter;
