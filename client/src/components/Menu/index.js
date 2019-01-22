import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => (
  <nav
    className='menu'
  >
    <div className='bigButton-container'>
      <Link className='bigButton' to='/' title='Back to map' alt='Back to map'>
        <svg className='bigButton__icon'>
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
