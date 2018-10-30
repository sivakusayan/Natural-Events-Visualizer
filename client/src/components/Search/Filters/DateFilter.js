/**
 * @fileoverview A controlled form that allows the user to filter
 * by date.
 */

import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ filterValues, setFilter }) => (
  <div>
    <h1>Date Filters</h1>
    <form>
      <DatePicker 
        selected={moment(filterValues.startDate)}
        selectsStart
        startDate={moment(filterValues.startDate)}
        endDate={moment(filterValues.endDate)}
        onChange={date => setFilter.startDate(date)}
      />
      <DatePicker 
        selected={moment(filterValues.endDate)}
        selectsEnd
        startDate={moment(filterValues.startDate)}
        endDate={moment(filterValues.endDate)}
        onChange={date => setFilter.endDate(date)}
      />
    </form>
  </div>
);

DateFilter.propTypes = {
  /**
   * A collection of values that describe the
   * current filters being used.
   */
  filterValues: PropTypes.shape({
    startDate: PropTypes.number,
    endDate: PropTypes.number,
  }).isRequired,
  /**
   * A collection of functions that can change the
   * filters being used for the respective field.
   */
  setFilter: PropTypes.shape({
    startDate: PropTypes.func,
    endDate: PropTypes.func,
  }).isRequired,
};

export default DateFilter;
