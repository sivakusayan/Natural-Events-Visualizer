/**
 * Renders the mobile layout of the application.
 */
import React from 'react';
import { Route } from 'react-router-dom';

import SearchContainer from '../containers/Search/indexContainer';
import EventMapMobile from './Map/EventMapMobile';

class MobileLayout extends React.Component {
  state = {
    hideMap: false,
  }

  render() {
    const { hideMap } = this.state;
    let mapClassName = '';
    if (hideMap) mapClassName += 'hide';
    return (
      <React.Fragment>
        <Route path='/search' component={SearchContainer} />
        <EventMapMobile className={mapClassName} />
      </React.Fragment>
    );
  }
}

export default MobileLayout;