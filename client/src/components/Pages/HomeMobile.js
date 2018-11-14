import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const HomeMobile = () => (
  <div
    // We hide the homepage under instead of unmounting it since
    // loading the map over and over again would be too
    // expensive.
    className='underlay'
  >
    <Link className='mapLink mapLink--menu' to='/menu'>Open Menu</Link>
    <Link className='mapLink mapLink--search' to='/search'>Open Search</Link>
    <EventMapContainer />
  </div>
);

export default HomeMobile;
