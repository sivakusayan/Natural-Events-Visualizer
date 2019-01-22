import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const Home = () => (
  <main>
    <div className='bigButton-container'>
      <Link className='bigButton' to='/menu' title='Open menu' alt='Open menu'>
        <svg className='bigButton__icon'>
          <use href='icons/spritesheet.svg#menu' />
        </svg>
      </Link>
      <Link className='bigButton' to='/search' title='Search' alt='Search'>
        <svg className='bigButton__icon'>
          <use href='icons/spritesheet.svg#search' />
        </svg>
      </Link>
    </div>
    <EventMapContainer />
  </main>
);

export default Home;
