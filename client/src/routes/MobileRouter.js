import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Menu from '../components/Menu/Menu';
import SearchContainer from '../containers/Search/indexContainer';
import Filters from '../components/Filters/index';
import About from '../components/Pages/About';
import Credits from '../components/Pages/Credits';

const MobileRouter = ({ location }) => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    // We hide the homepage under instead of unmounting it since
    // loading the map over and over again would be too
    // expensive.
    className={`switch-wrapper ${location.pathname !== '/' ? 'overlay' : ''}`}
  >
    <Route path='/menu' component={Menu} />
    <Route path='/search' component={SearchContainer} />
    <Route path='/filters' component={Filters} />
    <Route path='/about' component={About} />
    <Route path='/credits' component={Credits} />
  </AnimatedSwitch>
);

export default withRouter(MobileRouter);
