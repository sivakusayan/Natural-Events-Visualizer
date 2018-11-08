/**
 * @fileoverview This component controls how the filtering options will be rendered.
 * It acts as an intermediary between the entire Search component and 
 * the smaller filters, and assigns a job to each filter.
 */

import React from 'react';
import PropTypes from 'prop-types';

import LocationFilter from './LocationFilter';
import CategoryFilter from './CategoryFilter';
import DateFilter from './DateFilter';

const Filters = ({
  hide, toggleHide, setFilters, filters,
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
        filterValues={filters.categoriesFilter}
        setFilter={{
          add: setFilters.addToCategories,
          remove: setFilters.removeFromCategories,
        }}
      />
      <LocationFilter
        filterValues={{
          latitude: filters.locationFilter.latitude,
          longitude: filters.locationFilter.longitude,
          radius: filters.locationFilter.radius,
        }}
        setFilter={{
          latitude: setFilters.latitude,
          longitude: setFilters.longitude,
          radius: setFilters.radius,
        }}
      />
      <DateFilter
        filterValues={{
          startDate: filters.startDateFilter,
          endDate: filters.endDateFilter,
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
  setFilters: PropTypes.shape({
    latitude: PropTypes.func,
    longitude: PropTypes.func,
    radius: PropTypes.func,
    categories: PropTypes.func,
    startDate: PropTypes.func,
    endDate: PropTypes.func,
  }).isRequired,
  /**
   * A collection of values that describe the current
   * filters used in the application.
   */
  filters: PropTypes.shape({
    locationFilter: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      radius: PropTypes.number.isRequired,
    }).isRequired,
    categoriesFilter: PropTypes.arrayOf(PropTypes.number).isRequired,
    startDateFilter: PropTypes.number.isRequired,
    endDateFilter: PropTypes.number.isRequired,
  }).isRequired,
};

export default Filters;
