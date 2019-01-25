import React from 'react';
import PropTypes from 'prop-types';

import FilterHeader from './FilterHeader';

const LocationFilter = ({
  filter,
  isValid,
  onChange,
  isActive,
  toggle,
}) => (
  <section>
    <FilterHeader
      name='Location'
      isActive={isActive}
      toggle={toggle}
    />
    <form>
      <input
        type='text'
        name='latitude'
        className={isValid.latitude ? '' : 'invalid'}
        value={filter.latitude}
        onChange={onChange.latitude}
        disabled={!isActive}
      />
      <input
        type='text'
        name='longitude'
        className={isValid.longitude ? '' : 'invalid'}
        value={filter.longitude}
        onChange={onChange.longitude}
        disabled={!isActive}
      />
      <input
        type='text'
        name='radius'
        className={isValid.radius ? '' : 'invalid'}
        value={filter.radius}
        onChange={onChange.radius}
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
  isValid: PropTypes.shape({
    latitude: PropTypes.bool.isRequired,
    longitude: PropTypes.bool.isRequired,
    radius: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.shape({
    latitude: PropTypes.func.isRequired,
    longitude: PropTypes.func.isRequired,
    radius: PropTypes.func.isRequired,
  }).isRequired,
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
