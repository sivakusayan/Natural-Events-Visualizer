/**
 * @fileoverview This file lets the Search Component keep track of whats
 * being filtered. The source of this data is from the Filters Component,
 * where it will then be sent to the SearchBarContainer for 
 * query building and the SearchResultsContainer to show what 
 * is being filtered.
 */

import React from 'react';
import moment from 'moment';

import { CATEGORIES } from '../../constants/categories';

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
      // Will hydr
      categoriesFilter: Object.keys(CATEGORIES),
      // Filter for events after this date
      startDateFilter: 1325463472000,
      // Filter for events before this date
      endDateFilter: moment().valueOf(),
    },
    isLoading: false,
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
        startDateFilter: startDate,
      },
    }));
  }

  setEndDate = (endDate) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        endDateFilter: endDate,
      },
    }));
  }

  startLoading = () => {
    this.setState(({
      isLoading: true,
    }));
  }

  stopLoading = () => {
    this.setState(({
      isLoading: false,
    }));
  }

  setError = () => {
    this.setState(({
      error: true,
    }));
  }

  removeError = () => {
    this.setState(({
      error: false,
    }));
  }

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
    } = this.state;
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

  render({ events, setEvents }) {
    const { filters, isLoading, error } = this.state;
    return (
      <Search
        setEvents={setEvents}
        events={events}
        setFilters={{
          latitude: this.setLatitude,
          longitude: this.setLongitude,
          radius: this.setRadius,
          categories: this.setCategories,
          startDate: this.setStartDate,
          endDate: this.setEndDate,
        }}
        filters={filters}
        addFilterQuery={this.addFilterQuery}
        isLoading={isLoading}
        startLoading={this.startLoading}
        stopLoading={this.stopLoading}
        error={error}
        setError={this.setError}
        removeError={this.removeError}
      />
    );
  }
}
