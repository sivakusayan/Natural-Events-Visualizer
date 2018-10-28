/**
 * This component controls how the filtering options will be rendered.
 */

import React from 'react';

const Filters = () => (
  <form>
    <input type='number' id='latitude' />
    <input type='number' id='longitude' />
    <input type='number' id='radius' />
  </form>
);

export default Filters;
