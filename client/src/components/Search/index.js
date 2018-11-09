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
        />
        {hideFilters && (
          <React.Fragment>
            <SearchBarContainer
              setEvents={setEvents}
              startLoading={startLoading}
              doneLoading={doneLoading}
              setError={setError}
              removeError={removeError}
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
};

export default Search;
