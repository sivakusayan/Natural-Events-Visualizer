/**
 * @fileoverview A controlled form that allows the user to filter
 * by date.
 */

import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ filters, setStartDate, setEndDate }) => (
  <div>
    <h1>Date Filters</h1>
    <form>
      <DatePicker 
        selected={moment(filters.startDate)}
        selectsStart
        startDate={moment(filters.startDate)}
        endDate={moment(filters.endDate)}
        onChange={date => setStartDate(moment(date).valueOf())}
      />
      <DatePicker 
        selected={moment(filters.endDate)}
        selectsEnd
        startDate={moment(filters.startDate)}
        endDate={moment(filters.endDate)}
        onChange={date => setEndDate(moment(date).valueOf())}
      />
    </form>
  </div>
);

DateFilter.propTypes = {
  /**
   * A collection of values that describe the
   * current filters being used.
   */
  filters: PropTypes.shape({
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }).isRequired,
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
};

export default DateFilter;
