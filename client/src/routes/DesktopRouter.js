import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import SearchContainer from '../containers/Search/indexContainer';
import Filters from '../components/Filters/index';

const DesktopRouter = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    // We hide the homepage under instead of unmounting it since
    // loading the map over and over again would be too
    // expensive.
    className='switch-wrapper'
  > 
    <Route path='/filters' component={Filters} />
    <Route path='/' component={SearchContainer} />
  </AnimatedSwitch>
);

export default withRouter(DesktopRouter);
