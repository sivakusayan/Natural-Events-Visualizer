/**
 * This file lets the Search Component keep track of whats
 * being filtered. The source of this data is from the Filters Component,
 * where it will then be sent to the SearchBarContainer for 
 * query building and the SearchResultsContainer to show what 
 * is being filtered.
 */

import React from 'react';

import Search from '../../components/Search/index';

export default class SearchContainer extends React.Component {
  state = {
    locationFilter: {
      latitude: '',
      longitude: '',
      radius: 1000000,
    },
    categoriesFilter: undefined,
    startDateFilter: undefined,
    endDateFilter: undefined,
  }

  // SETTERS FOR STATE FIELDS

  setLatitude = (latitude) => {
    this.setState(prevState => ({
      locationFilter: {
        ...prevState.locationFilter,
        latitude,
      },
    }));
  }

  setLongitude = (longitude) => {
    this.setState(prevState => ({
      locationFilter: {
        ...prevState.locationFilter,
        longitude,
      },
    }));
  }

  setRadius = (radius) => {
    this.setState(prevState => ({
      locationFilter: {
        ...prevState.locationFilter,
        radius,
      },
    }));
  }

  setCategories = (categories) => {
    this.setState({
      categoriesFilter: categories,
    });
  }

  setStartDate = (startDate) => {
    this.setState({
      startDateFilter: startDate,
    });
  }

  setEndDate = (endDate) => {
    this.setState({
      endDateFilter: endDate,
    });
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

  render() {
    return (
      <Search
        setFilters={{
          latitude: this.setLatitude,
          longitude: this.setLongitude,
          radius: this.setRadius,
          categories: this.setCategories,
          startDate: this.setStartDate,
          endDate: this.setEndDate,
        }}
        filtersState={this.state}
        addFilterQuery={this.addFilterQuery}
      />
    );
  }
}
