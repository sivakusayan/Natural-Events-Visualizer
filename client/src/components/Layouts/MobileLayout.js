import React from 'react';

import AppRouterMobile from '../../routes/AppRouterMobile';
import EventMapMobile from '../Map/EventMapMobile';

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
        <AppRouterMobile />
        {/* Don't unmount map for performance purposes. Hide it instead. */}
        <EventMapMobile className={mapClassName} />
      </React.Fragment>
    );
  }
}

export default MobileLayout;
