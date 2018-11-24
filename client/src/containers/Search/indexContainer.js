import React from 'react';

import Search from '../../components/Search/index';

export default class SearchContainer extends React.Component {
  state = {
    // Events that are listed in search results. This is
    // separate from the events that are rendered on the
    // map. (Perhaps they will be synced as the dataset
    // starts to grow large)
    events: [],
    // True if search results are loading, false otherwise
    isLoading: false,
    // True if latest search returned an error, false otherwise
    error: false,
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
      events,
      isLoading,
      error,
    } = this.state;
    return (
      <Search
        {...this.state}
        setEvents={this.setEvents}
        startLoading={this.startLoading}
        doneLoading={this.doneLoading}
        setError={this.setError}
        removeError={this.removeError}
      />
    );
  }
}
