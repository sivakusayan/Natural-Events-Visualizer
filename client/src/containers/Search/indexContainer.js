/**
 * @fileoverview This file lets the Search Component keep track of whats
 * being filtered. The source of this data is from the Filters Component,
 * where it will then be sent to the SearchBarContainer for 
 * query building.
 */

import React from 'react';

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

  render() {
    const {
      activeFilters,
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
        activeFilters={activeFilters}
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
