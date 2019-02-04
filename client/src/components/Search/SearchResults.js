import React from 'react';
import PropTypes from 'prop-types';

import SearchResultContainer from '../../containers/Search/SearchResultContainer';
import Event from '../../propTypes/Event';

const SearchResults = ({ events }) => (
  <ul className='search-results'>
    {events.map(event => <SearchResultContainer key={event._id} event={event} />)}
  </ul>
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
