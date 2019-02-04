import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import ButtonContainer from '../utils/ButtonContainer';

const Menu = () => (
  <nav
    className='menu'
  >
    <ButtonContainer
      firstBtn={{ icon: 'back', title: 'Back to map', to: '/map' }}
    />
    <NavLink className='menu__link' to='/about'>About</NavLink>
    <NavLink className='menu__link' to='/credits'>Credits</NavLink>
    <a
      className='menu__link'
      href='https://github.com/sivakusayan/Natural-Events-Visualizer'
      target='_blank'
      rel='noopener noreferrer'
    >
      Github
    </a>
  </nav>
);

export default Menu;
