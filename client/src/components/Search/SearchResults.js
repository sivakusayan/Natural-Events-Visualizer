import React from 'react';
import PropTypes from 'prop-types';
import SearchResultContainer from '../../containers/Search/SearchResultContainer';

import Event from '../../propTypes/Event';

const SearchResults = ({ events = [], isLoading, error }) => (
  <div>
    {isLoading && <h1>Hold on, we are loading your data...</h1>}
    {error && <h1>Sorry, something went wrong.</h1>}
    {!isLoading && events.map(event => <SearchResultContainer key={event._id} event={event} />)}
    {(events.length === 0 && !isLoading) && <h1>No search results have been found.</h1>}
  </div>
);

SearchResults.propTypes = {
  events: PropTypes.arrayOf(Event),
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

SearchResults.defaultProps = {
  events: [],
  isLoading: false,
  error: false,
};

export default SearchResults;
