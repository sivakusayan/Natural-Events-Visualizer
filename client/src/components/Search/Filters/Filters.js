/**
 * @fileoverview This component controls how the filtering options will be rendered.
 * It acts as an intermediary between the entire Search component and 
 * the smaller filters, and assigns a job to each filter.
 */

import React from 'react';
import PropTypes from 'prop-types';

import LocationFilterContainer from '../../../containers/Search/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../../containers/Search/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../../containers/Search/Filters/DateFilterContainer';

const Filters = ({
  hide, toggleHide, activeFilters, toggleFilters,
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
      <CategoryFilterContainer
        isActive={activeFilters.categories}
        toggle={toggleFilters.categories}
      />
      <LocationFilterContainer
        isActive={activeFilters.location}
        toggle={toggleFilters.location}
      />
      <DateFilterContainer
        startDateIsActive={activeFilters.startDate}
        toggleStartDate={toggleFilters.startDate}
        endDateIsActive={activeFilters.endDate}
        toggleEndDate={toggleFilters.endDate} 
      />
    </React.Fragment>
    )}
  </div>
);

Filters.propTypes = {
  /**
   * True if filters are to be hidden. False
   * otherwise.
   */
  hide: PropTypes.bool.isRequired,
  /**
   * Toggles the values of hide.
   */
  toggleHide: PropTypes.func.isRequired,
  /**
   * Object that contains information about which
   * filters are active or not. A disabled filter
   * will not be added to the query, even if the 
   * filter has a value in the state.
   */
  activeFilters: PropTypes.shape({
    location: PropTypes.bool.isRequired,
    categories: PropTypes.bool.isRequired,
    startDate: PropTypes.bool.isRequired,
    endDate: PropTypes.bool.isRequired,
  }).isRequired,
  /**
   * Object with functions that toggle the truth
   * value of their corresponding field in 
   * activeFilters.
   */
  toggleFilters: PropTypes.shape({
    location: PropTypes.func.isRequired,
    categories: PropTypes.func.isRequired,
    startDate: PropTypes.func.isRequired,
    endDate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Filters;
