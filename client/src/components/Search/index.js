/**
 * @fileoverview This is the main file for the Search Component of our application.
 * It allows the user to search for events, and returns the server's response to be 
 * rendered to the user. 
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import SearchResults from './SearchResults';

const Search = ({
  setEvents,
  events,
  isLoading,
  startLoading,
  doneLoading,
  error,
  setError,
  removeError,
}) => (
  <div>
    <Link to='/'>Go to Map</Link>
    <Link to='/filters'>Filtering Options</Link>
    <SearchBarContainer
      setEvents={setEvents}
      startLoading={startLoading}
      doneLoading={doneLoading}
      setError={setError}
      removeError={removeError}
    />
    <SearchResults
      events={events}
      isLoading={isLoading}
      error={error}
    />
  </div>
);

Search.propTypes = {
  /**
   * Sets the events that will be rendered in the 
   * search results.
   */
  setEvents: PropTypes.func.isRequired,
  /**
   * Array of EventGeoJSON. The current events being
   * used in the application.
   */
  events: PropTypes.arrayOf(Event).isRequired,
  /**
   * True if the search results are loading, false otherwise.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Sets the loading tag to true.
   */
  startLoading: PropTypes.func.isRequired,
  /**
   * Sets the loading tag to false.
   */
  doneLoading: PropTypes.func.isRequired,
  /**
   * True if the most recent search request gave back an 
   * error, false otherwise.
   */
  error: PropTypes.bool.isRequired,
  /**
   * Sets the error tag to true.
   */
  setError: PropTypes.func.isRequired,
  /**
   * Sets the error tag to false.
   */
  removeError: PropTypes.func.isRequired,
};

export default Search;
