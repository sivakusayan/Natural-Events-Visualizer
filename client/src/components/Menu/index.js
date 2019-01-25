import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => (
  <nav
    className='menu'
  >
    <div className='btn-container'>
      <Link className='btn btn--big' to='/' title='Back to map' alt='Back to map'>
        <svg className='btn--big__icon'>
          <use href='icons/spritesheet.svg#backArrow' />
        </svg>
      </Link>
    </div>
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
