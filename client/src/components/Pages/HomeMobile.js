import React from 'react';
import PropTypes from 'prop-types';

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

HomeMobile.propTypes = {
  /**
   * Determines whether the homepage is hidden or not.
   * We hide the homepage instead of unmounting it since
   * loading the map over and over again would be too
   * expensive.
   */
  hide: PropTypes.bool.isRequired,
};

export default HomeMobile;
