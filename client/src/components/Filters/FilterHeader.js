import React from 'react';
import PropTypes from 'prop-types';

const FilterHeader = ({ name, isActive, toggle }) => (
  <div className='filter__header'>
    <p className='filter__title'>{name}</p>
    <button
      className={`btn ${isActive ? 'btn--disable' : 'btn--enable'}`}
      onClick={toggle}
      type='button'
    >
      {isActive ? 'Disable' : 'Enable'}
    </button>
  </div>
);

FilterHeader.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default FilterHeader;
