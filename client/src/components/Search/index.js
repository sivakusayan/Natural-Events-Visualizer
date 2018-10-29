/**
 * @fileoverview This is the main file for the Search Component of our application.
 * It allows the user to search for events, and returns the server's response to be 
 * rendered to the user. The results can be filtered if the user wishes.
 */

import React from 'react';
import PropTypes from 'prop-types';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import Filters from './Filters/Filters';
import SearchResultsContainer from '../../containers/Search/SearchResultsContainer';

const Search = ({ setFilters, filtersState, addFilterQuery }) => (
  <div>
    <SearchBarContainer addFilterQuery={addFilterQuery} />
    <Filters filtersState={filtersState} setFilters={setFilters} />
    <SearchResultsContainer />
  </div>
);

Search.propTypes = {
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
  /**
   * A function that builds a query string depending
   * on the current filters.
   */
  addFilterQuery: PropTypes.func.isRequired,
};

export default Search;
