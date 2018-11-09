/**
 * Allows the CategoryFilter to add or remove categories
 * to the state's filters field.
 */

import { connect } from 'react-redux';

import { addCategory, removeCategory } from '../../state/actions/filters';
import { toggleCategories } from '../../state/actions/filtersAreActive';
import CategoryFilter from '../../components/Filters/CategoryFilter';

const mapStateToProps = state => ({
  filter: state.filters.categories,
  isActive: state.filtersAreActive.categories,
});

const mapDispatchToProps = dispatch => ({
  add: id => dispatch(addCategory(id)),
  remove: id => dispatch(removeCategory(id)),
  toggle: () => dispatch(toggleCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
