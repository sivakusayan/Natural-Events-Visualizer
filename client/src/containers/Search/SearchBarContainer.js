/**
 * @fileoverview This component implements the searchbar logic for our application. It sends 
 * queries from a debounced input to make sure the server isn't flooded
 * with unnecessary requests.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import { connect } from 'react-redux';

import fetchRetry from '../../../../utils/fetchRetry';

import { setEvents } from '../../state/actions/events';

import SearchBar from '../../components/Search/SearchBar';

class SearchBarContainer extends React.Component {
  debouncedFetchData = debounce(500, (title) => {
    const {
      updateEventList,
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
      .then(events => updateEventList(events))
      // Catch in fetch only handles 'network errors'. Handling of errors
      // will be done in the above codeblock
      .catch(() => setError())
      .finally(doneLoading());
  })

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
      <SearchBar debouncedFetchData={this.debouncedFetchData} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateEventList: events => dispatch(setEvents(events)),
});

SearchBarContainer.propTypes = {
  /**
   * Updates the events used in the redux store
   */
  updateEventList: PropTypes.func.isRequired,
  /**
   * Sets the loading flag for the Search Component
   * to true. 
   */
  startLoading: PropTypes.func.isRequired,
  /**
   * Sets the loading flag for the Search Component
   * to false. 
   */
  doneLoading: PropTypes.func.isRequired,
  /**
   * Sets the error flag for the Search Component
   * to true. 
   */
  setError: PropTypes.func.isRequired,
  /**
   * Sets the error flag for the Search Component
   * to false.
   */
  removeError: PropTypes.func.isRequired,
  /**
   * Object of filters currently used in the application.
   * Used to build the search query. 
   */
  filters: PropTypes.shape({
    locationFilter: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      radius: PropTypes.number,
    }),
    categoriesFilter: PropTypes.arrayOf(PropTypes.number).isRequired,
    startDateFilter: PropTypes.number,
    endDateFilter: PropTypes.number,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(SearchBarContainer);
