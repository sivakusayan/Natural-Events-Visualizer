/**
 * Allows the CategoryFilter to add or remove categories
 * to the state's filters field.
 */

import { connect } from 'react-redux';

<<<<<<< HEAD:client/src/containers/Filters/CategoryFilterContainer.js
import { addCategory, removeCategory } from '../../state/actions/filters';
import { toggleCategories } from '../../state/actions/filtersAreActive';
import CategoryFilter from '../../components/Filters/CategoryFilter';
=======
import { addCategory, removeCategory } from '../../../state/actions/filters';
import { toggleCategories } from '../../../state/actions/filtersAreActive';
import CategoryFilter from '../../../components/Search/Filters/CategoryFilter';
>>>>>>> fa77ac020419527358b1d6243f0d163bed492143:client/src/containers/Search/Filters/CategoryFilterContainer.js

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
