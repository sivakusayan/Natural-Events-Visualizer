/**
 * @fileoverview This is the main file for the Search Component of our application.
 * It allows the user to search for events, and returns the server's response to be 
 * rendered to the user. The results can be filtered if the user wishes.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Event from '../../propTypes/Event';

import SearchBarContainer from '../../containers/Search/SearchBarContainer';
import Filters from './Filters/Filters';
import SearchResults from './SearchResults';

class Search extends React.Component {
  state = {
    // If this is true, filters component will appear
    // and search bar and results will be hidden. If false,
    // the opposite will be true.
    hideFilters: true,
  }

  /**
   * Toggles the hideFilters value.
   */
  toggleHideFilters = () => {
    this.setState(prevState => ({
      hideFilters: !prevState.hideFilters,
    }));
  }

  render() {
    const {
      setEvents,
      events,
      activeFilters,
      toggleFilters,
      isLoading,
      startLoading,
      doneLoading,
      error,
      setError,
      removeError,
    } = this.props;
    const { hideFilters } = this.state;
    return (
      <div>
        <Link to='/'>Go to Map</Link>
        <Filters
          hide={hideFilters}
          toggleHide={this.toggleHideFilters}
          activeFilters={activeFilters}
          toggleFilters={toggleFilters}
        />
        {hideFilters && (
          <React.Fragment>
            <SearchBarContainer
              setEvents={setEvents}
              startLoading={startLoading}
              doneLoading={doneLoading}
              setError={setError}
              removeError={removeError}
              activeFilters={activeFilters}
            />
            <SearchResults
              events={events}
              isLoading={isLoading}
              error={error}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  /**
   * Sets the events that will be rendered in the 
   * search results.
   */
  setEvents: PropTypes.func.isRequired,
  /**
   * Array of EventGeoJSON. The current events being
   * used in the application.
   */
  events: PropTypes.arrayOf(Event).isRequired,
  /**
   * True if the search results are loading, false otherwise.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Sets the loading tag to true.
   */
  startLoading: PropTypes.func.isRequired,
  /**
   * Sets the loading tag to false.
   */
  doneLoading: PropTypes.func.isRequired,
  /**
   * True if the most recent search request gave back an 
   * error, false otherwise.
   */
  error: PropTypes.bool.isRequired,
  /**
   * Sets the error tag to true.
   */
  setError: PropTypes.func.isRequired,
  /**
   * Sets the error tag to false.
   */
  removeError: PropTypes.func.isRequired,
  /**
   * Object that contains information about which
   * filters are active or not. A disabled filter
   * will not be added to the query, even if the 
   * filter has a value in the state.
   */
  activeFilters: PropTypes.shape({
    location: PropTypes.bool.isRequired,
    categories: PropTypes.bool.isRequired,
    startDate: PropTypes.bool.isRequired,
    endDate: PropTypes.bool.isRequired,
  }).isRequired,
  /**
   * Object with functions that toggle the truth
   * value of their corresponding field in 
   * activeFilters.
   */
  toggleFilters: PropTypes.shape({
    location: PropTypes.func.isRequired,
    categories: PropTypes.func.isRequired,
    startDate: PropTypes.func.isRequired,
    endDate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Search;
