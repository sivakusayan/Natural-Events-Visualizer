import React from 'react';
import PropTypes from 'prop-types';

import CATEGORIES from '../../constants/CATEGORIES';

const CategoryFilter = ({
  filter,
  add,
  remove,
  isActive = false,
  toggle,
}) => {
  const updateCategories = (e) => {
    if (e.target.checked) {
      add(e.target.value);
    } else {
      remove(e.target.value);
    }
  };

  return (
    <section>
      <div
        tabIndex={0}
        onClick={toggle}
        onKeyPress={toggle}
        role='menuItem'
      >
        <h1>Category Filter</h1>
      </div>
      <form>
        {Object.keys(CATEGORIES).map(categoryID => (
          <label htmlFor={categoryID}>
            <input
              type='checkbox'
              name='categories'
              value={categoryID}
              onClick={updateCategories}
              checked={filter.includes(categoryID)}
              disabled={!isActive}
            />
            {CATEGORIES[categoryID].title}
          </label>
        ))}
      </form>
    </section>
  );
};

CategoryFilter.propTypes = {
  /**
   * An array holding all category filters to apply to the search query.
   */
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * Adds a category to the filter
   */
  add: PropTypes.func.isRequired,
  /**
   * Removes a category from the filter
   */
  remove: PropTypes.func.isRequired,
  /**
   * True if the category filter is currently being applied, false otherwise
   */
  isActive: PropTypes.bool,
  /**
   * Toggle the isActive state for this filter
   */
  toggle: PropTypes.bool.isRequired,
};

CategoryFilter.defaultProps = {
  isActive: false,
};

export default CategoryFilter;
