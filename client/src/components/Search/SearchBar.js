/**
 * @fileoverview This component controls how our searchbar will be rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ debouncedSendQuery }) => (
  <form>
    <input
      type='search'
      placeholder='Search here'
      onChange={e => debouncedSendQuery(e.target.value)}
    />
  </form>
);

Searchbar.propTypes = {
  /**
   * A debounced function that makes a request
   * to the API. 
   * @see SearchContainer in ../../containers/Search/indexContainer
   */
  debouncedSendQuery: PropTypes.func.isRequired,
};

export default Searchbar;
