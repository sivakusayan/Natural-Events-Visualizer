import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import SearchResults from './SearchResults';
import LoadingIcon from '../Loading/LoadingIcon';

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
    <div className='btn-container'>
      <Link className='btn btn--big' to='/' title='Back to map' alt='Back to map'>
        <svg className='btn__icon'>
          <use href='icons/spritesheet.svg#backArrow' />
        </svg>
      </Link>
      <Link className='btn btn--big' to='/filters' title='Search Filters' alt='Search Filters'>
        <svg className='btn__icon'>
          <use href='icons/spritesheet.svg#filter' />
        </svg>
      </Link>
    </div>
    <SearchBarContainer
      setEvents={setEvents}
      startLoading={startLoading}
      doneLoading={doneLoading}
      setError={setError}
      removeError={removeError}
    />
    {(!isLoading && !error && events.length > 0) ? <SearchResults events={events} />
      : (
        <div className='search__message'>
          {isLoading && <LoadingIcon className='search__loading-icon' />}
          {error && <h1 className='search__error'>Sorry, something went wrong.</h1>}
          {(events.length === 0 && !isLoading && !error)
            && <h1 className='search__error'>No search results have been found.</h1>}
        </div>
    )}
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
