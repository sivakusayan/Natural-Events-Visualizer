/**
 * @fileoverview This component controls how a list of search results is
 * rendered.
 */

import React from 'react';

import SearchResult from './SearchResult';

export default ({ events }) => (
  <div>
    {events.map(event => <SearchResult key={event._id} event={event} />)}
  </div>
);
