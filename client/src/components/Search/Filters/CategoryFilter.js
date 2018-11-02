/**
 * @fileoverview A controlled form that allows the user to filter
 * by event category.
 */

import React from 'react';

import CATEGORIES from '../../../constants/CATEGORIES';

const CategoryFilter = () => (
  <div>
    <h1>Category Filters</h1>
    <form>
      {Object.keys(CATEGORIES).map(categoryID => (
        <label htmlFor={categoryID}>
          <input
            type='radio'
            name='categories'
            id={categoryID}
            value={categoryID}
          />
          {CATEGORIES[categoryID].title}
        </label>
      ))}
    </form>
  </div>
);

export default CategoryFilter;
