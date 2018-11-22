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
  <section>
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
  </section>
);

LocationFilter.propTypes = {
  /**
   * Holds the values currently being used to filter for
   * location in the search query. All 3 values must be
   * defined to filter by location.
   */
  filter: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    radius: PropTypes.number,
  }).isRequired,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
  setRadius: PropTypes.func.isRequired,
  /**
   * True if this filter is currently being applied
   * to the search query, false otherwise.
   */
  isActive: PropTypes.bool,
  /**
   * Toggles the isActive state of this filter
   */
  toggle: PropTypes.bool.isRequired,
};

LocationFilter.defaultProps = {
  isActive: false,
};

export default LocationFilter;
