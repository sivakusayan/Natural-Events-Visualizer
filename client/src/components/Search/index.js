import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import SearchResults from './SearchResults';
import SearchMessage from './SearchMessage';

const Search = ({
  setEvents,
  events,
  isLoading,
  startLoading,
  doneLoading,
  error,
  setError,
  removeError,
}) => {
  const shouldShowResults = !isLoading && !error && events.length > 0;
  return (
    <section
      className='search'
    >
      <div className='btn-container'>
        <Link className='btn btn--big' to='/' title='Back to map' alt='Back to map'>
          <svg className='btn__icon'>
            <use href='icons/spritesheet.svg#back' />
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
      {shouldShowResults
        ? <SearchResults events={events} />
        : <SearchMessage results={events} error={error} isLoading={isLoading} />
      }
    </section>
  );
};

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
