/**
 * Allows the CategoryFilter to add or remove categories
 * to the state's filters field.
 */

import { connect } from 'react-redux';

import { addCategory, removeCategory } from '../../../state/actions/filters';
import CategoryFilter from '../../../components/Search/Filters/CategoryFilter';

const mapStateToProps = state => ({
  filters: state.filters.categories,
});

const mapDispatchToProps = dispatch => ({
  add: id => dispatch(addCategory(id)),
  remove: id => dispatch(removeCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
