/**
 * Connects each search result to the store. This allows
 * a search result to be able to change the selectedEvent
 * when it is clicked on.
 */

import { connect } from 'react-redux';

import SearchResult from '../../components/Search/SearchResult';
import { selectEvent } from '../../state/actions/selectedEvent';

export default connect(null, { selectEvent })(SearchResult);
