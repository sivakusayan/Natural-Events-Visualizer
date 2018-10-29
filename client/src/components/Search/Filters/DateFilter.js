/**
 * @fileoverview A controlled form that allows the user to filter
 * by date
 */

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default ({ filterValues, setFilter }) => (
  <div>
    <h1>Date Filters</h1>
    <form>
      <DatePicker 
        selected={moment(filterValues.startDate)}
        selectsStart
        startDate={moment(filterValues.startDate)}
        endDate={moment(filterValues.endDate)}
        onChangeRaw={e => setFilter.startDate(e.target.value)}
      />
      <DatePicker 
        selected={moment(filterValues.endDate)}
        selectsEnd
        startDate={moment(filterValues.startDate)}
        endDate={moment(filterValues.endDate)}
        onChangeRaw={e => setFilter.endDate(e.target.value)}
      />
    </form>
  </div>
);
