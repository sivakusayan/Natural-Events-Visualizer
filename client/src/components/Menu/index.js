import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => (
  <nav
    className='menu'
  >
    <Link className='bigButton bigButton--right' to='/' title='Back to map' alt='Back to map'>
      <svg className='bigButton__icon'>
        <use href='icons/sprite.svg#backArrow' />
      </svg>
    </Link>
    <NavLink className='link link--menu' to='/about'>Statistics</NavLink>
    <NavLink className='link link--menu' to='/about'>About</NavLink>
    <NavLink className='link link--menu' to='/credits'>Credits</NavLink>
  </nav>
);

export default Menu;
