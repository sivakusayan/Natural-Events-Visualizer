/**
 * @fileoverview A controlled form that allows the user to filter
 * by event category.
 */

import React from 'react';
import PropTypes from 'prop-types';

import CATEGORIES from '../../../../../constants/CATEGORIES';

class CategoryFilter extends React.Component {
  /**
   * Fired whenever a category checkbox is clicked. Adds
   * the categoryID to the category filters if checked,
   * and removes it otherwise.
   */
  updateCategories = (e) => {
    const { add, remove } = this.props.setFilter;
    if (e.target.checked) {
      add(e.target.value);
    } else {
      remove(e.target.value);
    }
  };

  render() {
    return (
      <div>
        <h1>Category Filters</h1>
        <form>
          {Object.keys(CATEGORIES).map(categoryID => (
            <label htmlFor={categoryID}>
              <input
                type='checkbox'
                name='categories'
                value={categoryID}
                onClick={this.updateCategories}
                checked={this.props.filterValues.includes(categoryID)}
              />
              {CATEGORIES[categoryID].title}
            </label>
          ))}
        </form>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  /**
   * An array of the category IDs that are currently in 
   * the categories filter.
   */
  filterValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * Allows manipulation of the categories filter. The add and
   * remove functions respectively add and remove one category
   * from the filter using the category ID.
   */
  setFilter: PropTypes.shape({
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
}

export default CategoryFilter;
