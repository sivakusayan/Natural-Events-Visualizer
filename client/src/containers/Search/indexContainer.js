/**
 * @fileoverview This file lets the Search Component keep track of whats
 * being filtered. The source of this data is from the Filters Component,
 * where it will then be sent to the SearchBarContainer for 
 * query building.
 */

import React from 'react';
import moment from 'moment';

import CATEGORIES from '../../constants/CATEGORIES';

import Search from '../../components/Search/index';

export default class SearchContainer extends React.Component {
  state = {
    // Filters are disabled by default
    activeFilters: {
      location: false,
      categories: false,
      startDate: false,
      endDate: false,
    },
    filterValues: {
      // Filter for events within the circle specified
      // by these values
      location: {
        latitude: '',
        longitude: '',
        radius: 1000000,
      },
      // Filter for events of the following categories
      categories: Object.keys(CATEGORIES),
      // Filter for events after this date
      startDate: 1325463472000,
      // Filter for events before this date
      endDate: moment().valueOf(),
    },
    // Events that are listed in search results
    events: [],
    // True if search results are loading, false otherwise
    isLoading: false,
    // True if latest search returned an error, false otherwise
    error: false,
  }

  // ENABLE OR DISABLE FILTERS

  toggleLocation = () => {
    this.setState(prevState => ({
      activeFilters: {
        ...prevState.activeFilters,
        location: !prevState.activeFilters.location,
      },
    }));
  }

  toggleCategories = () => {
    this.setState(prevState => ({
      activeFilters: {
        ...prevState.activeFilters,
        categories: !prevState.activeFilters.categories,
      },
    }));
  }

  toggleStartDate = () => {
    this.setState(prevState => ({
      activeFilters: {
        ...prevState.activeFilters,
        startDate: !prevState.activeFilters.startDate,
      },
    }));
  }

  toggleEndDate = () => {
    this.setState(prevState => ({
      activeFilters: {
        ...prevState.activeFilters,
        endDate: !prevState.activeFilters.endDate,
      },
    }));
  }

  // SETTERS FOR FILTER FIELDS

  setLatitude = (latitude) => {
    this.setState(prevState => ({
      filterValues: {
        ...prevState.filterValues,
        location: {
          ...prevState.location,
          latitude,
        },
      },
    }));
  }

  setLongitude = (longitude) => {
    this.setState(prevState => ({
      filterValues: {
        ...prevState.filterValues,
        location: {
          ...prevState.location,
          longitude,
        },
      },
    }));
  }

  setRadius = (radius) => {
    this.setState(prevState => ({
      filterValues: {
        ...prevState.filterValues,
        location: {
          ...prevState.location,
          radius,
        },
      },
    }));
  }

  setCategories = (categories) => {
    this.setState(prevState => ({
      filterValues: {
        ...prevState.filterValues,
        categories: categories,
      },
    }));
  }

  setStartDate = (startDate) => {
    this.setState(prevState => ({
      filterValues: {
        ...prevState.filterValues,
        startDate: moment(startDate).valueOf(),
      },
    }));
  }

  setEndDate = (endDate) => {
    this.setState(prevState => ({
      filterValues: {
        ...prevState.filterValues,
        endDate: moment(endDate).valueOf(),
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
    const { categories } = this.state.filterValues;
    this.setCategories(categories.concat([categoryID]));
  }

  /**
   * Removes the specified categoryID from the categories filter.
   * 
   * @param categoryID 
   *  The ID of the desired category to remove
   */
  removeFromCategories = (categoryID) => {
    const { categories } = this.state.filterValues;
    this.setCategories(categories.filter(id => id !== categoryID));
  }

  render() {
    const {
      filterValues,
      events,
      isLoading,
      error,
    } = this.state;
    return (
      <Search
        setEvents={this.setEvents}
        events={events}
        toggleFilters={{
          location: this.toggleLocation,
          categories: this.toggleCategories,
          startDate: this.toggleStartDate,
          endDate: this.toggleEndDate,
        }}
        setFilters={{
          latitude: this.setLatitude,
          longitude: this.setLongitude,
          radius: this.setRadius,
          addToCategories: this.addToCategories,
          removeFromCategories: this.removeFromCategories,
          startDate: this.setStartDate,
          endDate: this.setEndDate,
        }}
        filterValues={filterValues}
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
