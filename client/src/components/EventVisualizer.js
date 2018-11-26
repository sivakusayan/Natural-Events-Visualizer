
import React from 'react';

import AppRouter from '../routes/AppRouter';
import Home from './Pages/Home';

const EventVisualizer = () => (
  <>
    <AppRouter />
    {/* Don't unmount homepage map for performance purposes. 
        Hide it instead with stacking context. */}
    <Home />
  </>
);

export default EventVisualizer;
