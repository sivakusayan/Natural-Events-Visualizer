
import React from 'react';
import MediaQuery from 'react-responsive';

import MobileRoutes from '../routes/MobileRoutes';
import SearchRoutes from '../routes/SearchRoutes';
import PageRoutes from '../routes/PageRoutes';
import Home from './Pages/Home';
import Menu from './Menu/Menu';

const EventVisualizer = () => (
  <>
    {/* MOBILE LAYOUT */}
    <MediaQuery query='(min-device-width: 56.25em)'>
      <div className='side-bar'>
        <Menu />
        <SearchRoutes />
      </div>
      <PageRoutes />
      <Home />
    </MediaQuery>

    {/* DESKTOP LAYOUT */}
    <MediaQuery query='(max-device-width: 56.24em)'>
      <MobileRoutes />
      {/* Don't unmount homepage map for performance purposes. 
        Hide it instead with stacking context. */}
      <Home />
    </MediaQuery>
  </>
);

export default EventVisualizer;
