import React from 'react';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  }

  searchEvents = () => {
    const { startLoading, removeError, debouncedSearch } = this.props;
    const { searchQuery } = this.state;
    // We load here instead of inside the debounced function, since
    // doing that will debounce the state change as well. We could have
    // wrapped these functions inside one method and passed that as a 
    // child into this component, but for some reason that makes the
    // debounced calls not be able to 'detect each other', so that we
    // get multipled delayed calls instead of one debounced call.
    startLoading();
    removeError();
    // doneLoading and setError are called inside debounced search
    // after search results come back.
    debouncedSearch(searchQuery);
  }

  componentDidMount = () => {
    this.searchEvents();
  }

  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query,
    });
  }

  handleChange = (e) => {
    this.setSearchQuery(e.target.value);
    this.searchEvents();
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
      >
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
   * Sets the loading status of search results to true.
   */
  startLoading: PropTypes.func.isRequired,
  /**
   * Removes any lingering errors from a previous search.
   */
  removeError: PropTypes.func.isRequired,
  /**
   * A debounced search function. This will make it so we
   * don't flood the server with needless requests.
   */
  debouncedSearch: PropTypes.func.isRequired,
};

export default Searchbar;
