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
        isActive
      />
      <DateFilterContainer />
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
};

export default Filters;
