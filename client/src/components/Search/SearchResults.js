/**
 * @fileoverview This component controls how a list of search results is
 * rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';
import SearchResultContainer from '../../containers/Search/SearchResultContainer';

import Event from '../../propTypes/Event';

const SearchResults = ({ events = [], isLoading, error }) => (
  <div>
    {isLoading && <h1>Hold on, we are loading your data...</h1>}
    {!isLoading && events.map(event => <SearchResultContainer key={event._id} event={event} />)}
    {error && <h1>Sorry, something went wrong.</h1>}
  </div>
);

SearchResults.propTypes = {
  /**
   * The list of events to render.
   */
  events: PropTypes.arrayOf(Event),
};

SearchResults.defaultProps = {
  events: [],
};

export default SearchResults;
