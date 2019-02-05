// Only used on Desktop Layout

import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import About from '../components/Pages/About';
import Credits from '../components/Pages/Credits';

const PageRoutes = ({ location }) => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    // We hide the homepage under instead of unmounting it since
    // loading the map over and over again would be too
    // expensive.
    className={`switch-wrapper switch-wrapper--page ${!location.pathname.match(/^\/filter|\/$/) ? 'overlay' : ''}`}
  > 
    <Route path='/about' component={About} />
    <Route path='/credits' component={Credits} />
  </AnimatedSwitch>
);

export default withRouter(PageRoutes);
