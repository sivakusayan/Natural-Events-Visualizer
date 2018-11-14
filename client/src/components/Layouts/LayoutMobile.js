import React from 'react';

import AppRouterMobile from '../../routes/AppRouterMobile';

import HomeMobile from '../Pages/HomeMobile';

const LayoutMobile = () => (
  <React.Fragment>
    <AppRouterMobile />
    {/* Don't unmount homepage map for performance purposes. Hide it instead. */}
    <HomeMobile />
  </React.Fragment>
);

export default LayoutMobile;
