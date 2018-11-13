import React from 'react';

import ToggleMainPageLinkContainer from '../../containers/Links/ToggleMainPageLinkContainer';
import EventMapContainer from '../../containers/Map/EventMapContainer';

const HomeMobile = ({ hide }) => (
  <div
    className={hide ? 'hide' : ''}
  >
    <ToggleMainPageLinkContainer to='/menu'>Open Menu</ToggleMainPageLinkContainer>
    <ToggleMainPageLinkContainer to='/search'>Open Search</ToggleMainPageLinkContainer>
    <EventMapContainer />
  </div>
);

export default HomeMobile;
