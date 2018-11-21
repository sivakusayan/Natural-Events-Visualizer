import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const HomeMobile = () => (
  <div
    // We hide the homepage under instead of unmounting it since
    // loading the map over and over again would be too
    // expensive.
    className='underlay'
  >
    <Link className='mapButton mapButton--menu' to='/menu' title='Open menu' alt='Open menu'>
      <svg className='mapButton__icon mapButton__icon--menu'>
        <use href='icons/sprite.svg#menu' />
      </svg>
    </Link>
    <Link className='mapButton mapButton--search' to='/search' title='Search' alt='Search'>
      <svg className='mapButton__icon mapButton__icon--search'>
        <use href='icons/sprite.svg#search' />
      </svg>
    </Link>
    <EventMapContainer />
  </div>
);

export default HomeMobile;
