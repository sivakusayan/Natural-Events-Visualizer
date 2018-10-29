/**
 * @fileoverview A controlled form that allows the user to filter
 * by date
 */

import React from 'react';

export default ({ filterValues, setFilter }) => (
  <div>
    <h1>Location Filters</h1>
    <form>
      <input
        type='text'
        name='latitude'
        value={filterValues.latitude}
        onChange={e => setFilter.latitude(e.target.value)}
      />
      <input
        type='text'
        name='longitude'
        value={filterValues.longitude}
        onChange={e => setFilter.longitude(e.target.value)}
      />
      <input
        type='text'
        name='radius'
        value={filterValues.radius}
        onChange={e => setFilter.radius(e.target.value)}
      />
    </form>
  </div>
);
