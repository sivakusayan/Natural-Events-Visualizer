import React from 'react';

import AppRouterMobile from '../../routes/AppRouterMobile';

import HomeMobile from '../Pages/HomeMobile';

class LayoutMobile extends React.Component {
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
        {/* Don't unmount homepage map for performance purposes. Hide it instead. */}
        <HomeMobile className={mapClassName} />
      </React.Fragment>
    );
  }
}

export default LayoutMobile;
