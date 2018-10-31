/**
 * @fileoverview This is the main file for the Search Component of our application.
 * It allows the user to search for events, and returns the server's response to be 
 * rendered to the user. The results can be filtered if the user wishes.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../propTypes/Event';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import Filters from './Filters/Filters';
import SearchResultsContainer from '../../containers/Search/SearchResultsContainer';

const Search = ({
  events, setFilters, filters,
  isLoading, startLoading, doneLoading,
  error, setError, removeError,
}) => (
  <div>
    <SearchBarContainer
      filters={filters}
      startLoading={startLoading}
      doneLoading={doneLoading}
      setError={setError}
      removeError={removeError}
    />
    <Filters
      filters={filters}
      setFilters={setFilters}
    />
    <SearchResultsContainer
      events={events}
      isLoading={isLoading}
      error={error}
    />
  </div>
);

Search.propTypes = {
  /**
   * Array of EventGeoJSON. The current events being
   * used in the application.
   */
  events: PropTypes.arrayOf(Event).isRequired,
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
  /**
   * True if the search results are loading, false otherwise.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Sets isLoading to true
   */
  startLoading: PropTypes.func.isRequired,
  /**
   * Sets isLoading to false
   */
  doneLoading: PropTypes.func.isRequired,
  /**
   * True if the most recent search request gave back an 
   * error, false otherwise.
   */
  error: PropTypes.bool.isRequired,
  /**
   * Sets error to true
   */
  setError: PropTypes.bool.isRequired,
  /**
   * Sets error to false
   */
  removeError: PropTypes.bool.isRequired,
};

export default Search;
