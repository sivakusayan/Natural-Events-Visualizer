/**
 * This component was added specifically for the need of 
 * dispatching an action when we enter and leave the homepage. We could
 * use another library to connect react-router and redux, but those
 * dependencies would not be worth it for these small usecases.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const ToggleMainPageLink = ({ toggleMainPage, children, to }) => (
  <Link onClick={toggleMainPage} to={to}>{children}</Link>
);

export default ToggleMainPageLink;
