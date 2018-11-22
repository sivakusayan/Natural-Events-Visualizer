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
    <div className='buttonContainer'>
      <Link className='button button--mapLeft' to='/search' title='Search' alt='Search'>
        <svg className='button__icon'>
          <use href='icons/sprite.svg#search' />
        </svg>
      </Link>
      <Link className='button button--mapRight' to='/menu' title='Open menu' alt='Open menu'>
        <svg className='button__icon'>
          <use href='icons/sprite.svg#menu' />
        </svg>
      </Link>
    </div>
    <EventMapContainer />
  </div>
);

export default HomeMobile;
