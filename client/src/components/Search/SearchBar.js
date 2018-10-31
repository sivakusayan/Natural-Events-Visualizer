/**
 * @fileoverview This component controls how our searchbar will be rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ debouncedFetchData }) => (
  <form>
    <input
      type='search'
      placeholder='Search here'
      onChange={e => debouncedFetchData(e.target.value)}
    />
  </form>
);

Searchbar.propTypes = {
  /**
   * A debounced function that makes a request
   * to the API. 
   */
  debouncedFetchData: PropTypes.func.isRequired,
};

export default Searchbar;
