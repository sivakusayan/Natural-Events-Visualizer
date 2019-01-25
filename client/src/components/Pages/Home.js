import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const Home = () => (
  <main>
    <div className='btn-constainer'>
      <Link className='btn--big' to='/menu' title='Open menu' alt='Open menu'>
        <svg className='btn--big__icon'>
          <use href='icons/spritesheet.svg#menu' />
        </svg>
      </Link>
      <Link className='btn--big' to='/search' title='Search' alt='Search'>
        <svg className='btn--big__icon'>
          <use href='icons/spritesheet.svg#search' />
        </svg>
      </Link>
    </div>
    <EventMapContainer />
  </main>
);

export default Home;
