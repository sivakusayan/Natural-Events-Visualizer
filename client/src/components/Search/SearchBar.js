/**
 * @fileoverview This component controls how our searchbar will be rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  }

  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query,
    });
  }

  handleChange = (e) => {
    this.setSearchQuery(e.target.value);
    this.props.debouncedSearch(e.target.value);
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <form>
        <input
          type='search'
          placeholder='Search here'
          onChange={this.handleChange}
          value={searchQuery}
        />
      </form>
    );
  }
}

Searchbar.propTypes = {
  /**
   * A debounced function to search for events specifying
   * the query and filters.
   */
  debouncedSearch: PropTypes.func.isRequired,
};

export default Searchbar;
