/**
 * @fileoverview A controlled form that allows the user to filter
 * by location.
 */

import React from 'react';
import PropTypes from 'prop-types';

const LocationFilter = ({ filters, setLatitude, setLongitude, setRadius }) => (
  <div>
    <h1>Location Filters</h1>
    <form>
      <input
        type='text'
        name='latitude'
        value={filters.latitude}
        onChange={e => setLatitude(e.target.value)}
      />
      <input
        type='text'
        name='longitude'
        value={filters.longitude}
        onChange={e => setLongitude(e.target.value)}
      />
      <input
        type='text'
        name='radius'
        value={filters.radius}
        onChange={e => setRadius(e.target.value)}
      />
    </form>
  </div>
);

LocationFilter.propTypes = {
  /**
   * A collection of values that describe the
   * current filters being used.
   */
  filters: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    radius: PropTypes.number,
  }).isRequired,
  /**
   * Sets the latitude to use in the location filter.
   */
  setLatitude: PropTypes.func.isRequired,
  /**
   * Sets the longitude to use in the location filter.
   */
  setLongitude: PropTypes.func.isRequired,
  /**
   * Sets the radius to use in the location filter.
   */
  setRadius: PropTypes.func.isRequired,
};

export default LocationFilter;
