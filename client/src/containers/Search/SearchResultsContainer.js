import React from 'react';
import { connect } from 'react-redux';

import SearchResults from '../../components/Search/SearchResults';

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(SearchResults);
