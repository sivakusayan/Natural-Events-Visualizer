import React from 'react';
import { debounce } from 'throttle-debounce';

/**
 * This component renders a searchbar for our application.
 */
export default ({ debouncedSendTitleQuery }) => (
  <form>
    <input
      type='search'
      placeholder='Search here'
      onChange={e => debouncedSendTitleQuery(e.target.value)}
    />
  </form>
);
