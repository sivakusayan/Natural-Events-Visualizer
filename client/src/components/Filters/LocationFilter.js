/**
 * @fileoverview A controlled form that allows the user to filter
 * by location.
 */

import React from 'react';
import PropTypes from 'prop-types';

const LocationFilter = ({
  filter,
  setLatitude,
  setLongitude,
  setRadius,
  isActive = false,
  toggle,
}) => (
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
        value={filter.latitude}
        onChange={e => setLatitude(e.target.value)}
        disabled={!isActive}
      />
      <input
        type='text'
        name='longitude'
        value={filter.longitude}
        onChange={e => setLongitude(e.target.value)}
        disabled={!isActive}
      />
      <input
        type='text'
        name='radius'
        value={filter.radius}
        onChange={e => setRadius(e.target.value)}
        disabled={!isActive}
      />
    </form>
  </div>
);

LocationFilter.propTypes = {
  /**
   * A collection of values that describe the
   * current filter being used.
   */
  filter: PropTypes.shape({
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
  isActive: PropTypes.bool,
  /**
   * Toggles the isActive prop value.
   */
  toggle: PropTypes.bool.isRequired,
};

LocationFilter.defaultProps = {
  isActive: false,
};

export default LocationFilter;
