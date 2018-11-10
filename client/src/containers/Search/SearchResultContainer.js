import { connect } from 'react-redux';

import SearchResult from '../../components/Search/SearchResult';
import { selectEvent } from '../../state/actions/selectedEvent';

export default connect(null, { selectEvent })(SearchResult);
