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
  filter: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    radius: PropTypes.number,
  }).isRequired,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
  setRadius: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  toggle: PropTypes.bool.isRequired,
};

LocationFilter.defaultProps = {
  isActive: false,
};

export default LocationFilter;
