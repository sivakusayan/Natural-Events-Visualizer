/**
 * @fileoverview This is the main file for the Search Component of our application.
 * It allows the user to search for events, and returns the server's response to be 
 * rendered to the user. 
 */

import React from 'react';
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

export default Search;
