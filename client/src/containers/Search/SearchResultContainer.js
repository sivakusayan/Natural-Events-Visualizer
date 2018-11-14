/**
 * We connect the individual search results instead of connecting the
 * entire top level container since many smaller connected components
 * give better performance over a connected top-level component.
 * 
 * https://redux.js.org/faq/reactredux#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResult from '../../components/Search/SearchResult';
import { selectEvent } from '../../state/actions/selectedEvent';

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectEvent: (id) => {
    dispatch(selectEvent(id));
    ownProps.history.push('/');
  },
});

export default withRouter(connect(null, mapDispatchToProps)(SearchResult));
