import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const Home = () => (
  <main>
    <Link className='bigButton bigButton--left' to='/search' title='Search' alt='Search'>
      <svg className='bigButton__icon'>
        <use href='icons/sprite.svg#search' />
      </svg>
    </Link>
    <Link className='bigButton bigButton--right' to='/menu' title='Open menu' alt='Open menu'>
      <svg className='bigButton__icon'>
        <use href='icons/sprite.svg#menu' />
      </svg>
    </Link>
    <EventMapContainer />
  </main>
);

export default Home;
