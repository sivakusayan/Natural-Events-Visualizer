import React from 'react';
import PropTypes from 'prop-types';

import FilterHeader from './FilterHeader';
import CATEGORIES from '../../constants/copy/CATEGORIES';

const CategoryFilter = ({
  filter,
  add,
  remove,
  isActive,
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
    <section className='filter filter--categories'>
      <FilterHeader
        name='Categories'
        isActive={isActive}
        toggle={toggle}
      />
      <form className={`filter__form ${isActive ? 'isActive' : ''}`}>
        {Object.keys(CATEGORIES).map(categoryID => (
          <>
            <label htmlFor={categoryID} className='label'>
              <p className='label__name label__name--checkbox'>
                {CATEGORIES[categoryID].title}
              </p>
              <input
                type='checkbox'
                className='input input--checkbox'
                id={categoryID}
                value={categoryID}
                onClick={updateCategories}
                checked={filter.includes(categoryID)}
                disabled={!isActive}
              />
            </label>
          </>
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
