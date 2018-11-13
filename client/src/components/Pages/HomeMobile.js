import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const HomeMobile = () => (
  <div>
    <Link to='/menu'>Click here for the menu</Link>
    <Link to='/search'>Click here to search</Link>
    <EventMapContainer />
  </div>
);

export default HomeMobile;
