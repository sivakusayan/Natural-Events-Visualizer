/**
 * @fileoverview The map that mobile users will be working with. It
 * is augmented with two buttons that will allow the user to search
 * for events or open the main menu.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import EventMapContainer from '../../containers/Map/EventMapContainer';

const EventMapMobile = () => (
  <div>
    <Link to='/search'>Click here to search</Link>
    <EventMapContainer />
  </div>
);

export default EventMapMobile;
