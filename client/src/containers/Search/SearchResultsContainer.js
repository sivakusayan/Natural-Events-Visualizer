/**
 * @fileoverview This component implements the event rendering logic for our application. 
 * It allows the SearchResults component to have access to the events in the state.
 */

import React from 'react';
import { connect } from 'react-redux';

import SearchResults from '../../components/Search/SearchResults';

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(SearchResults);
