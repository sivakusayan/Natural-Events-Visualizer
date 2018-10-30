/**
 * @fileoverview This component controls how our searchbar will be rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

const Searchbar = ({ debouncedSendQuery }) => (
  <form>
    <input
      type='search'
      placeholder='Search here'
      onChange={e => debouncedSendQuery(e.target.value)}
      value={search}
    />
  </form>
);

Searchbar.propTypes = {
  /**
   * A debounced function that makes a request
   * to the API. 
   * @see SearchBarContainer in ../../containers/Search/SearchBarContainer
   */
  debouncedSendQuery: PropTypes.func.isRequired,
};

export default Searchbar;
