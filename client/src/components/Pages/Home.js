import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';
import ButtonContainer from '../utils/ButtonContainer';

const Home = () => (
  <main className='map-container'>
    <ButtonContainer
      firstBtn={{ icon: 'menu', title: 'Open Menu', to: '/menu' }}
      secondBtn={{ icon: 'search', title: 'Search', to: '/search' }}
    />
    <EventMapContainer />
  </main>
);

export default Home;
