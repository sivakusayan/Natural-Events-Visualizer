import React from 'react';

import SearchResult from './SearchResult';

export default ({ events }) => (
  <div>
    {events.map(event => <SearchResult key={event._id} event={event} />)}
  </div>
);
