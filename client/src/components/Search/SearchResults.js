import React from 'react';
import PropTypes from 'prop-types';

import SearchResultContainer from '../../containers/Search/SearchResultContainer';
import LoadingIcon from '../Loading/LoadingIcon';
import Event from '../../propTypes/Event';

const SearchResults = ({ events = [], isLoading, error }) => (
  <div>
    {isLoading && <LoadingIcon />}
    {error && <h1>Sorry, something went wrong.</h1>}
    {(events.length === 0 && !isLoading) && <h1>No search results have been found.</h1>}
    {(!error && !isLoading)
      && events.map(event => <SearchResultContainer key={event._id} event={event} />)}
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
