/**
 * @fileoverview This file lets the Search Component keep track of whats
 * being filtered. The source of this data is from the Filters Component,
 * where it will then be sent to the SearchBarContainer for 
 * query building and the SearchResultsContainer to show what 
 * is being filtered.
 */

import React from 'react';
import moment from 'moment';

import CATEGORIES from '../../constants/CATEGORIES';

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
    events: [],
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

  render() {
    const {
      filters,
      events,
      isLoading,
      error,
    } = this.state;
    return (
      <Search
        setEvents={this.setEvents}
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
      />
    );
  }
}
