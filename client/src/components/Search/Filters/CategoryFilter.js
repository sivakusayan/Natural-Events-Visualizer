/**
 * @fileoverview A controlled form that allows the user to filter
 * by event category.
 */

import React from 'react';
import PropTypes from 'prop-types';

import CATEGORIES from '../../../constants/CATEGORIES';

const CategoryFilter = ({ filters, add, remove }) => {
  /**
   * Fired whenever a category checkbox is clicked. Adds
   * the categoryID to the category filters if checked,
   * and removes it otherwise.
   */
  const updateCategories = (e) => {
    if (e.target.checked) {
      add(e.target.value);
    } else {
      remove(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <h1>Category Filters</h1>
      </div>
      <form>
        {Object.keys(CATEGORIES).map(categoryID => (
          <label htmlFor={categoryID}>
            <input
              type='checkbox'
              name='categories'
              value={categoryID}
              onClick={updateCategories}
              checked={filters.includes(categoryID)}
            />
            {CATEGORIES[categoryID].title}
          </label>
        ))}
      </form>
    </div>
  );
};

CategoryFilter.propTypes = {
  /**
   * An array of the category IDs that are currently in 
   * the categories filter.
   */
  filters: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * Adds the specified category ID to the categories filter.
   */
  add: PropTypes.func.isRequired,
  /**
   * Removes the specified category ID from the categories filter.
   */
  remove: PropTypes.func.isRequired,
};

export default CategoryFilter;
