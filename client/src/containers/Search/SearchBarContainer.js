import React from 'react';
import { debounce } from 'throttle-debounce';
import { connect } from 'react-redux';

import { setEvents } from '../../state/actions/events';
import { startLoading, doneLoading } from '../../state/actions/loading';
import { setError, removeError } from '../../state/actions/error';

import SearchBar from '../../components/Search/SearchBar';

/**
 * This component implements the searchbar logic for our application. It sends 
 * queries from a debounced input to make sure the server isn't flooded
 * with unnecessary requests.
 */

const mapDispatchToProps = dispatch => ({
  /**
   * Sends a search query by title from the input. The search is
   * debounced by 0.5 seconds.
   */
  debouncedSendTitleQuery: debounce(500, (title) => {
    // Remove any lingering error tags
    dispatch(removeError());
    // Set the loading tag to true
    dispatch(startLoading());
    // Fetch events from the API
    fetch(`http://localhost:3000/api/events?title=${title}`)
      .then(res => res.json())
      .then(events => dispatch(setEvents(events)))
      // Catch in fetch only handles 'network errors'. Handling of errors
      // will be done in the above codeblock
      .catch(err => console.log(err))
      .finally(dispatch(doneLoading()));
  }),
});

export default connect(null, mapDispatchToProps)(SearchBar);
