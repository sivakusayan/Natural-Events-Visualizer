/**
 * @fileoverview This component controls how our searchbar will be rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  }
  
  render() {
    const { searchQuery } = this.state;
    const { debouncedSearch } = this.props;
    return (
      <form>
        <input
          type='search'
          placeholder='Search here'
          onChange={e => debouncedSearch(e.target.value)}
          value={searchQuery}
        />
      </form>
    );
  }
};

Searchbar.propTypes = {
  /**
   * A debounced function to search for events specifying
   * the query and filters.
   */
  debouncedSearch: PropTypes.func.isRequired,
};

export default Searchbar;
