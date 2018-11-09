/**
 * @fileoverview A controlled form that allows the user to filter
 * by location.
 */

import React from 'react';
import PropTypes from 'prop-types';

const LocationFilter = ({ filters, setLatitude, setLongitude, setRadius, isActive, toggle }) => (
  <div>
    <div
      tabIndex={0}
      onClick={toggle}
      onKeyPress={toggle}
      role='menuItem'
    >
      <h1>Location Filter</h1>
    </div>
    <form>
      <input
        type='text'
        name='latitude'
        value={filters.latitude}
        onChange={e => setLatitude(e.target.value)}
        disabled={!isActive}
      />
      <input
        type='text'
        name='longitude'
        value={filters.longitude}
        onChange={e => setLongitude(e.target.value)}
        disabled={!isActive}
      />
      <input
        type='text'
        name='radius'
        value={filters.radius}
        onChange={e => setRadius(e.target.value)}
        disabled={!isActive}
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
  /**
   * True if the location filter is applied to the search query.
   * False otherwise.
   */
  isActive: PropTypes.bool.isRequired,
  /**
   * Toggles the isActive prop value.
   */
  toggle: PropTypes.bool.isRequired,
};

export default LocationFilter;
