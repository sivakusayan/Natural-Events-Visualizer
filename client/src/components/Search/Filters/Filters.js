/**
 * @fileoverview This component controls how the filtering options will be rendered.
 * It acts as an intermediary between the entire Search component and 
 * the smaller filters, and assigns a job to each filter.
 */

import React from 'react';
import PropTypes from 'prop-types';

import FilterValues from '../../../propTypes/FilterValues';
import SetFilters from '../../../propTypes/SetFilters';
import LocationFilter from './LocationFilter';
import CategoryFilter from './CategoryFilter';
import DateFilter from './DateFilter';

const Filters = ({
  hide, toggleHide, setFilters, filterValues,
}) => (
  <div>
    <div
      tabIndex={0}
      onClick={toggleHide}
      onKeyPress={toggleHide}
      role='option'
      aria-selected='false'
    >
      <h1>Filters</h1>
    </div>
    {!hide && (
    <React.Fragment>
      <CategoryFilter
        filterValues={filterValues.categories}
        setFilter={{
          add: setFilters.addToCategories,
          remove: setFilters.removeFromCategories,
        }}
      />
      <LocationFilter
        filterValues={{
          latitude: filterValues.location.latitude,
          longitude: filterValues.location.longitude,
          radius: filterValues.location.radius,
        }}
        setFilter={{
          latitude: setFilters.latitude,
          longitude: setFilters.longitude,
          radius: setFilters.radius,
        }}
      />
      <DateFilter
        filterValues={{
          startDate: filterValues.startDate,
          endDate: filterValues.endDate,
        }}
        setFilter={{
          startDate: setFilters.startDate,
          endDate: setFilters.endDate,
        }}
      />
    </React.Fragment>
    )}
  </div>
);

Filters.propTypes = {
  /**
   * A collection of functions that can set the filters
   * of their respective fields for searching.  
   */
  setFilters: SetFilters.isRequired,
  /**
   * A collection of values that describe the current
   * filters used in the application.
   */
  filterValues: FilterValues.isRequired,
};

export default Filters;
