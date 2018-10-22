import React from 'react';
import { debounce } from 'throttle-debounce';

/**
 * This component implements a searchbar for our application. It sends 
 * queries from a debounced input to make sure the server isn't flooded
 * with unnecessary requests.
 */
export default class SearchBar extends React.Component {
  state = {
    searchValue: '', // Current value in search input
    searchQuery: '', // Search query that is being processed
  };

  /**
   * Sets the search query from the input.
   * 
   * @param search
   *  The value to set searchQuery to
   */
  setSearchQuery = (search) => {
    this.setState({ searchQuery: search });
  };

  /**
   * The debounced version of setSearchQuery
   */
  debouncedSearchQuery = debounce(500, this.setSearchQuery);

  /**
   * Controls the input of the searchInput
   * 
   * @param e
   *  The event that triggered this function
   */
  onSearchChange = (e) => {
    const search = e.target.value;
    this.setState({ searchValue: search }, () => {
      this.throttledSearchQuery(search);
    });
  };

  render() {
    const { searchValue, searchQuery } = this.state;
    return (
      <form>
        <input
          type='search'
          placeholder='Search here'
          value={searchValue}
          onChange={this.onSearchChange}
        />
        <h1>
          Current query:
          {searchQuery}
        </h1>
      </form>
    );
  }
}
