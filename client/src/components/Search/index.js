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
  <section
    className='search'
  >
    <Link className='bigButton bigButton--left' to='/' title='Back to map' alt='Back to map'>
      <svg className='bigButton__icon'>
        <use href='icons/spritesheet.svg#backArrow' />
      </svg>
    </Link>
    <Link className='bigButton bigButton--right' to='/filters' title='Search Filters' alt='Search Filters'>
      <svg className='bigButton__icon'>
        <use href='icons/spritesheet.svg#filter' />
      </svg>
    </Link>
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
  </section>
);

Search.propTypes = {
  setEvents: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(Event).isRequired,
  /**
   * True if the search results are loading, false otherwise.
   * Distinguished from hydration of data for map.
   */
  isLoading: PropTypes.bool.isRequired,
  startLoading: PropTypes.func.isRequired,
  doneLoading: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
  removeError: PropTypes.func.isRequired,
};

export default Search;
