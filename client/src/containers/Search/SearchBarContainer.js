/**
 * @fileoverview This component implements the searchbar logic for our application. It sends 
 * queries from a debounced input to make sure the server isn't flooded
 * with unnecessary requests.
 */

import { debounce } from 'throttle-debounce';
import { connect } from 'react-redux';

import fetchRetry from '../../../../utils/fetchRetry';

import { setEvents } from '../../state/actions/events';
import { startLoading, doneLoading } from '../../state/actions/loading';
import { setError, removeError } from '../../state/actions/error';

import SearchBar from '../../components/Search/SearchBar';

const mapDispatchToProps = (dispatch, ownProps) => ({
  /**
   * Sends a search query by title from the input. The search is
   * debounced by 0.5 seconds.
   */
  debouncedSendQuery: debounce(500, (title) => {
    // Remove any lingering error tags
    dispatch(removeError());
    // Set the loading tag to true
    dispatch(startLoading());
    // Fetch events from the API
    fetchRetry(`http://localhost:3000/api/events?title=${title}&${ownProps.addFilterQuery()}`)
      .then(events => dispatch(setEvents(events)))
      // Catch in fetch only handles 'network errors'. Handling of errors
      // will be done in the above codeblock
      .catch(() => dispatch(setError()))
      .finally(dispatch(doneLoading()));
  }),
});

export default connect(null, mapDispatchToProps)(SearchBar);
