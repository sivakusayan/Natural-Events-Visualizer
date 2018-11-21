import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => (
  <div
    className='menu'
  >
    <Link className='button button--back' to='/' title='Back to map' alt='Back to map'>
      <svg className='button__icon button__icon--back'>
        <use href='icons/sprite.svg#backArrow' />
      </svg>
    </Link>
    <NavLink className='link link--big' to='/about'>Statistics</NavLink>
    <NavLink className='link link--big' to='/about'>About</NavLink>
    <NavLink className='link link--big' to='/credits'>Credits</NavLink>
  </div>
);

export default Menu;
