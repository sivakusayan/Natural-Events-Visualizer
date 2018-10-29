/**
 * @fileoverview A controlled form that allows the user to filter
 * by location.
 */

import React from 'react';
import PropTypes from 'prop-types';

const LocationFilter = ({ filterValues, setFilter }) => (
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

LocationFilter.propTypes = {
  /**
   * A collection of values that describe the
   * current filters being used.
   */
  filterValues: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    radius: PropTypes.number,
  }).isRequired,
  /**
   * A collection of functions that can change the
   * filters being used for the respective field.
   */
  setFilter: PropTypes.shape({
    latitude: PropTypes.func,
    longitude: PropTypes.func,
    radius: PropTypes.func,
  }).isRequired,
};

export default LocationFilter;
