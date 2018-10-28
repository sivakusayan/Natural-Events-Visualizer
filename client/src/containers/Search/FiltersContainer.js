/**
 * @fileoverview This components implements the filters logic for the
 * application. Given the input fields, it builds the filters that will be
 * dispatched and used in querying.
 */

import { connect } from 'react-redux';

import { setLocation, setRadius } from '../../state/actions/filters';

import Filters from '../../components/Search/Filters';

const mapStateToProps = state => ({
  filters: state.filters,
});

