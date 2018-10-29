/**
 * This component controls how the filtering options will be rendered.
 */

import React from 'react';

const Filters = ({ setFilters }) => (
  <form>
    <input type='text' id='latitude' onChange={e => setFilters.latitude(e.target.value)} />
    <input type='number' id='longitude' />
    <input type='number' id='radius' />
  </form>
);

export default Filters;
