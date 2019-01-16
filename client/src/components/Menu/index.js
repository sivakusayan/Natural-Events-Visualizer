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
    <NavLink className='link link--menu' to='/about'>About</NavLink>
    <NavLink className='link link--menu' to='/credits'>Credits</NavLink>
    <a
      className='link link--menu'
      href='https://github.com/sivakusayan/Natural-Events-Visualizer'
      target='_blank'
      rel='noopener noreferrer'
    >
      Github
    </a>
  </nav>
);

export default Menu;
