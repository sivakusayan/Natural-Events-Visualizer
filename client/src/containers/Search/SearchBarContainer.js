import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';

import fetchRetry from '../../../../utils/fetchRetry';

import SearchBar from '../../components/Search/SearchBar';


class SearchBarContainer extends React.Component {
/**
   * A function that sends a search request using the specified parameters.
   * @async
   */
  search = (title) => {
    const {
      setEvents,
      startLoading,
      doneLoading,
      setError,
      removeError,
    } = this.props;
    // Remove any lingering error tags
    removeError();
    // Set the loading tag to true
    startLoading();
    // Fetch events from the API
    fetchRetry(`http://localhost:3000/api/events?title=${title}&${this.addFilterQuery()}`)
      .then(events => setEvents(events))
      // Catch in fetch only handles 'network errors'. Handling of errors
      // will be done in the above codeblock
      .catch(() => setError())
      .finally(doneLoading());
  }

  /**
   * The debounced version of the search function. 
   * @async
   */
  debouncedSearch = debounce(500, this.search);

  /**
   * @returns 
   *  A query string built from the filter parameters.
   */
  addFilterQuery = () => {
    const queryArray = [];
    const {
      locationFilter,
      categoriesFilter,
      startDateFilter,
      endDateFilter,
    } = this.props.filters;
    // We want all three to be defined to filter by location
    if (locationFilter.latitude && locationFilter.longitude && locationFilter.radius) {
      queryArray.push(`lat=${locationFilter.latitude}`);
      queryArray.push(`long=${locationFilter.longitude}`);
      queryArray.push(`radius=${locationFilter.radius}`);
    }
    if (categoriesFilter) {
      queryArray.push(`categories=${categoriesFilter.join(',')}`);
    }
    if (startDateFilter) {
      queryArray.push(`startDate=${startDateFilter}`);
    }
    if (endDateFilter) {
      queryArray.push(`endDate=${endDateFilter}`);
    }
    return queryArray.join('&');
  }

  render() {
    return (
      <SearchBar debouncedSearch={this.debouncedSearch} />
    );
  }
}

SearchBarContainer.propTypes = {
  /**
   * Sets the events that will be rendered in the 
   * search results.
   */
  setEvents: PropTypes.func.isRequired,
  /**
   * A collection of values that describe the current
   * filters used in the application.
   */
  filters: PropTypes.shape({
    locationFilter: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      radius: PropTypes.number.isRequired,
    }).isRequired,
    categoriesFilter: PropTypes.arrayOf(PropTypes.number).isRequired,
    startDateFilter: PropTypes.number.isRequired,
    endDateFilter: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Sets the loading tag to true.
   */
  startLoading: PropTypes.func.isRequired,
  /**
   * Sets the loading tag to false.
   */
  doneLoading: PropTypes.func.isRequired,
  /**
   * Sets the error tag to true.
   */
  setError: PropTypes.func.isRequired,
  /**
   * Sets the error tag to false.
   */
  removeError: PropTypes.func.isRequired,
};

export default SearchBarContainer;
