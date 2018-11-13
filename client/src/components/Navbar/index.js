import React from 'react';
import { NavLink } from 'react-router-dom';

import ToggleMainPageLinkContainer from '../../containers/Links/ToggleMainPageLinkContainer';

const Navbar = () => (
  <div>
    <ToggleMainPageLinkContainer to='/' exact>Back</ToggleMainPageLinkContainer>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/credits'>Credits</NavLink>
  </div>
);

export default Navbar;
