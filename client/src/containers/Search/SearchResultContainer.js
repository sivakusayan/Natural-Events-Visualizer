import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResult from '../../components/Search/SearchResult';
import { selectEvent } from '../../state/actions/selectedEvent';
import { toggleMainPage } from '../../state/actions/hideMainPage';

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectEvent: (id) => {
    dispatch(selectEvent(id));
    dispatch(toggleMainPage());
    ownProps.history.push('/');
  },
});

export default withRouter(connect(null, mapDispatchToProps)(SearchResult));
