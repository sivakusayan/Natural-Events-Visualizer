import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '../components/Menu/index';
import SearchContainer from '../containers/Search/indexContainer';
import Filters from '../components/Filters/index';
import About from '../components/Pages/About';
import Credits from '../components/Pages/Credits';

const AppRouterMobile = () => (
  <Switch>
    <Route path='/menu' component={Menu} />
    <Route path='/search' component={SearchContainer} />
    <Route path='/filters' component={Filters} />
    <Route path='/about' component={About} />
    <Route path='/credits' component={Credits} />
  </Switch>
);

export default AppRouterMobile;