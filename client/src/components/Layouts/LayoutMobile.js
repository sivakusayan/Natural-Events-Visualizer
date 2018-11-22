import React from 'react';

import AppRouterMobile from '../../routes/AppRouterMobile';

import HomeMobile from '../Pages/HomeMobile';

const LayoutMobile = () => (
  <>
    <AppRouterMobile />
    {/* Don't unmount homepage map for performance purposes. Hide it instead. */}
    <HomeMobile />
  </>
);

export default LayoutMobile;
