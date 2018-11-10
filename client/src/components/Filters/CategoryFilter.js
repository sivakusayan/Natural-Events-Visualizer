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
    <div>
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
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  toggle: PropTypes.bool.isRequired,
};

CategoryFilter.defaultProps = {
  isActive: false,
};

export default CategoryFilter;
