import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import { connect } from 'react-redux';

import FilterValues from '../../propTypes/FilterValues';
import fetchRetry from '../../../../utils/fetchRetry';
import SearchBar from '../../components/Search/SearchBar';


const SearchBarContainer = ({
  setEvents, startLoading, doneLoading, setError, removeError, filters,
}) => {
  /**
   * @returns 
   *  A query string built from the filter parameters.
   */
  const addFilterQuery = () => {
    const queryArray = [];
    const {
      location,
      categories,
      startDate,
      endDate,
    } = filters;
    // We want all three to be defined to filter by location
    if (location.latitude && location.longitude && location.radius) {
      queryArray.push(`lat=${location.latitude}`);
      queryArray.push(`long=${location.longitude}`);
      queryArray.push(`radius=${location.radius}`);
    }
    if (categories) {
      queryArray.push(`categoryID=${categories.join(',')}`);
    }
    if (startDate) {
      queryArray.push(`startDate=${startDate}`);
    }
    if (endDate) {
      queryArray.push(`endDate=${endDate}`);
    }
    // Separate parameters by & and join
    return queryArray.join('&');
  };

  /**
   * A function that sends a search request using the specified parameters.
   * @async
   */
  const search = (title) => {
    // Remove any lingering error tags
    removeError();
    // Set the loading tag to true
    startLoading();
    // Fetch events from the API
    console.log(`http://localhost:3000/api/events?title=${title}&${addFilterQuery()}`);
    fetchRetry(`http://localhost:3000/api/events?title=${title}&${addFilterQuery()}`)
      .then(events => setEvents(events))
      // Catch in fetch only handles 'network errors'. Handling of errors
      // will be done in the above codeblock
      .catch(() => setError())
      .finally(doneLoading());
  };

  /**
   * The debounced version of the search function. 
   * @async
   */
  const debouncedSearch = debounce(500, search);

  return (
    <SearchBar debouncedSearch={debouncedSearch} />
  );
};

const mapStateToProps = state => ({
  filters: state.filters,
});

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
  filters: FilterValues.isRequired,
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

export default connect(mapStateToProps)(SearchBarContainer);
