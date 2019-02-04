
import React from 'react';
import MediaQuery from 'react-responsive';

import MobileRouter from '../routes/MobileRouter';
import DesktopRouter from '../routes/DesktopRouter';
import Home from './Pages/Home';
import Menu from './Menu/Menu';

const EventVisualizer = () => (
  <>
    {/* MOBILE LAYOUT */}
    <MediaQuery query='(min-device-width: 56.25em)'>
      <div className='side-bar'>
        <Menu />
        <DesktopRouter />
      </div>
      <Home />
    </MediaQuery>

    {/* DESKTOP LAYOUT */}
    <MediaQuery query='(max-device-width: 56.24em)'>
      <MobileRouter />
      {/* Don't unmount homepage map for performance purposes. 
        Hide it instead with stacking context. */}
      <Home />
    </MediaQuery>
  </>
);

export default EventVisualizer;
