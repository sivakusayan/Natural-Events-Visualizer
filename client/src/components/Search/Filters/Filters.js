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

const Filters = ({ setFilters, filtersState }) => (
  <div>
    <LocationFilter
      filterValues={{
        latitude: filtersState.locationFilter.latitude,
        longitude: filtersState.locationFilter.longitude,
        radius: filtersState.locationFilter.radius,
      }}
      setFilter={{
        latitude: setFilters.latitude,
        longitude: setFilters.longitude,
        radius: setFilters.radius,
      }}
    />
    <DateFilter
      filterValues={{
        startDate: filtersState.startDateFilter,
        endDate: filtersState.endDateFilter,
      }}
      setFilter={{
        startDate: setFilters.startDate,
        endDate: setFilters.endDate,
      }}
    />
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
  filtersState: PropTypes.shape({
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
