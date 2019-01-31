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
  <section className={`filter filter--location ${isActive ? 'isActive' : ''}`}>
    <FilterHeader
      name='Location Filter'
      isActive={isActive}
      toggle={toggle}
    />
    <form className='form'>
      <label htmlFor='latitude' className='field field--text'>
        <p className='field__name'>
          Latitude
        </p>
        <input
          type='text'
          name='latitude'
          id='latitude'
          className={`field__input ${isValid.latitude ? '' : 'invalid'}`}
          value={filter.latitude}
          onChange={onChange.latitude}
          disabled={!isActive}
        />
      </label>
      <label htmlFor='longitude' className='field field--text'>
        <p className='field__name'>
          Longitude
        </p>
        <input
          type='text'
          name='longitude'
          id='longitude'
          className={`field__input ${isValid.longitude ? '' : 'invalid'}`}
          value={filter.longitude}
          onChange={onChange.longitude}
          disabled={!isActive}
        />
      </label>
      <label htmlFor='radius' className='field field--text'>
        <p className='field__name'>
          Radius
        </p>
        <input
          type='text'
          name='radius'
          id='radius'
          className={`field__input ${isValid.radius ? '' : 'invalid'}`}
          value={filter.radius}
          onChange={onChange.radius}
          disabled={!isActive}
        />
      </label>
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
