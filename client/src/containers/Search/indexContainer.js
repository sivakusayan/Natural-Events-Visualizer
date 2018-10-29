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
      latitude: undefined,
      longitude: undefined,
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
  queryBuilder = () => {
    const queryArray = [];
    const {
      locationFilter,
      categoriesFilter,
      startDateFilter,
      endDateFilter,
    } = this.state;
    // We want all three to be defined to filter by location
    if (locationFilter.latitude && locationFilter.longitude && locationFilter.radius) {
      queryArray.push(`latitude=${locationFilter.latitude}`);
      queryArray.push(`longitude=${locationFilter.longitude}`);
      queryArray.push(`radius=${locationFilter.radius}`);
    }
    if (locationFilter.categories) {
      queryArray.push(`categories=${categoriesFilter.join(',')}`);
    }
    if (locationFilter.startDate) {
      queryArray.push(`startDate=${startDateFilter}`);
    }
    if (locationFilter.endDate) {
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
        // setLatitude={this.setLatitude}
        // setLongitude={this.setLongitude}
        // setRadius={this.setRadius}
        // setCategories={this.setCategories}
        // setStartDate={this.setStartDate}
        // setEndDate={this.setEndDate}
        queryBuilder={this.queryBuilder}
      />
    );
  }
}
