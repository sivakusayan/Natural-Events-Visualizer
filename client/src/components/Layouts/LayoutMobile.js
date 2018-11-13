import React from 'react';

import AppRouterMobile from '../../routes/AppRouterMobile';

import HomeMobileContainer from '../../containers/Pages/HomeMobileContainer';

const LayoutMobile = () => (
  <React.Fragment>
    <AppRouterMobile />
    {/* Don't unmount homepage map for performance purposes. Hide it instead. */}
    <HomeMobileContainer />
  </React.Fragment>
);

export default LayoutMobile;
