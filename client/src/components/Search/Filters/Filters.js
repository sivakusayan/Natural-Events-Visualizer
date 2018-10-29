/**
 * @fileoverview This component controls how the filtering options will be rendered.
 * It acts as an intermediary between the entire Search component and 
 * the smaller filters, and assigns a job to each filter.
 */

import React from 'react';

import LocationFilter from './LocationFilter';
import CategoryFilter from './CategoryFilter';
import DateFilter from './DateFilter';

const Filters = ({ setFilters, filtersState }) => (
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
);

export default Filters;
