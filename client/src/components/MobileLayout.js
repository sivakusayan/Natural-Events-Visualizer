import React from 'react';
import { Route } from 'react-router-dom';

import SearchContainer from '../containers/Search/indexContainer';
import Filters from './Filters/index';
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
        <Route path='/filters' component={Filters} />
        <EventMapMobile className={mapClassName} />
      </React.Fragment>
    );
  }
}

export default MobileLayout;
