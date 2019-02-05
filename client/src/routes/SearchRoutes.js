// Only used on Desktop Layout

import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import SearchContainer from '../containers/Search/indexContainer';
import Filters from '../components/Filters/index';

const SearchRoutes = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}

    className='switch-wrapper switch-wrapper--search'
  > 
    <Route path='/filters' component={Filters} />
    <Route path='/' component={SearchContainer} />
  </AnimatedSwitch>
);

export default SearchRoutes;
