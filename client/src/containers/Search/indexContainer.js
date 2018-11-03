/**
 * @fileoverview This file lets the Search Component keep track of whats
 * being filtered. The source of this data is from the Filters Component,
 * where it will then be sent to the SearchBarContainer for 
 * query building and the SearchResultsContainer to show what 
 * is being filtered.
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { debounce } from 'throttle-debounce';

import fetchRetry from '../../../../utils/fetchRetry';

import CATEGORIES from '../../../../constants/CATEGORIES';

import Event from '../../propTypes/Event';
import Search from '../../components/Search/index';

export default class SearchContainer extends React.Component {
  state = {
    filters: {
      // Filter for events within the circle specified
      // by these values
      locationFilter: {
        latitude: '',
        longitude: '',
        radius: 1000000,
      },
      // Filter for events of the following categories
      categoriesFilter: Object.keys(CATEGORIES),
      // Filter for events after this date
      startDateFilter: 1325463472000,
      // Filter for events before this date
      endDateFilter: moment().valueOf(),
    },
    // Events that are listed in search results
    events: this.props.events,
    // True if search results are loading, false otherwise
    isLoading: false,
    // True if latest search returned an error, false otherwise
    error: false,
  }

  // SETTERS FOR STATE FIELDS

  setLatitude = (latitude) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        locationFilter: {
          ...prevState.locationFilter,
          latitude,
        },
      },
    }));
  }

  setLongitude = (longitude) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        locationFilter: {
          ...prevState.locationFilter,
          longitude,
        },
      },
    }));
  }

  setRadius = (radius) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        locationFilter: {
          ...prevState.locationFilter,
          radius,
        },
      },
    }));
  }

  setCategories = (categories) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        categoriesFilter: categories,
      },
    }));
  }

  setStartDate = (startDate) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        startDateFilter: moment(startDate).valueOf(),
      },
    }));
  }

  setEndDate = (endDate) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        endDateFilter: moment(endDate).valueOf(),
      },
    }));
  }

  startLoading = () => {
    this.setState({
      isLoading: true,
    });
  }

  doneLoading = () => {
    this.setState({
      isLoading: false,
    });
  }

  setError = () => {
    this.setState({
      error: true,
    });
  }

  removeError = () => {
    this.setState({
      error: false,
    });
  }

  setEvents = (events) => {
    this.setState({
      events,
    });
  }

  /**
   * Adds the specified categoryID to the categories filter.
   * 
   * @param categoryID 
   *  The ID of the desired category to add
   */
  addToCategories = (categoryID) => {
    const { categoriesFilter } = this.state.filters;
    this.setCategories(categoriesFilter.concat([categoryID]));
  }

  /**
   * Removes the specified categoryID from the categories filter.
   * 
   * @param categoryID 
   *  The ID of the desired category to remove
   */
  removeFromCategories = (categoryID) => {
    const { categoriesFilter } = this.state.filters;
    this.setCategories(categoriesFilter.filter(id => id !== categoryID));
  }

  /**
   * A function that sends a search request using the specified parameters.
   * @async
   */
  search = (title) => {
    // Remove any lingering error tags
    this.removeError();
    // Set the loading tag to true
    this.startLoading();
    // Fetch events from the API
    fetchRetry(`http://localhost:3000/api/events?title=${title}&${this.addFilterQuery()}`)
      .then(events => this.setEvents(events))
      // Catch in fetch only handles 'network errors'. Handling of errors
      // will be done in the above codeblock
      .catch(() => this.setError())
      .finally(this.doneLoading());
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
    } = this.state.filters;
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
    const {
      filters,
      events,
      isLoading,
      error,
    } = this.state;
    return (
      <Search
        events={events}
        setFilters={{
          latitude: this.setLatitude,
          longitude: this.setLongitude,
          radius: this.setRadius,
          addToCategories: this.addToCategories,
          removeFromCategories: this.removeFromCategories,
          startDate: this.setStartDate,
          endDate: this.setEndDate,
        }}
        filters={filters}
        isLoading={isLoading}
        startLoading={this.startLoading}
        doneLoading={this.doneLoading}
        error={error}
        setError={this.setError}
        removeError={this.removeError}
        debouncedSearch={this.debouncedSearch}
      />
    );
  }
}

SearchContainer.propTypes = {
  events: PropTypes.arrayOf(Event).isRequired,
};
