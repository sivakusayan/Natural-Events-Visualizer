import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <NavLink to='/' exact>Back</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/credits'>Credits</NavLink>
  </div>
);

export default Navbar;
