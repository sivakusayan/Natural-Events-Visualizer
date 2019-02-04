// Used only on mobile

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Helper component
const Button = ({ icon, title, to }) => (
  <Link className='btn btn--big' to={to} title={title} alt={title}>
    <svg className='btn__icon'>
      <use href={`icons/spritesheet.svg#${icon}`} />
    </svg>
  </Link>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const ButtonContainer = ({ firstBtn, secondBtn }) => (
  <div className='btn-container'>
    <Button 
      icon={firstBtn.icon} 
      title={firstBtn.title} 
      to={firstBtn.to} 
    />
    {secondBtn && 
      <Button 
        icon={secondBtn.icon} 
        title={secondBtn.title} 
        to={secondBtn.to} 
      />
    }
  </div>
);

ButtonContainer.propTypes = {
  firstBtn: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  secondBtn: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

ButtonContainer.defaultProps = {
  secondBtn: null,
}

export default ButtonContainer;
