/**
 * @fileoverview This component controls how our searchbar will be rendered.
 */

import React from 'react';
import { debounce } from 'throttle-debounce';

export default ({ debouncedSendTitleQuery }) => (
  <form>
    <input
      type='search'
      placeholder='Search here'
      onChange={e => debouncedSendTitleQuery(e.target.value)}
    />
  </form>
);
