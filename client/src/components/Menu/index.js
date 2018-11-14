import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => (
  <div
    className='menu'
  >
    <Link to='/' exact>Back</Link>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/credits'>Credits</NavLink>
  </div>
);

export default Menu;
