import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import SearchResults from './SearchResults';
import SearchMessage from './SearchMessage';
import ButtonContainer from '../utils/ButtonContainer';

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
      <ButtonContainer
        firstBtn={{ icon: 'back', title: 'Back to map', to: '/' }}
        secondBtn={{ icon: 'filter', title: 'Search Filters', to: '/filters' }}
      />
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
