/**
 * @fileoverview Renders the main UI for the application.
 */
import React from 'react';

import SearchContainer from '../containers/Search/indexContainer';
import EventMapContainer from '../containers/Map/EventMapContainer';

const EventVisualizer = () => (
  <div>
    {/* <SearchContainer />  */}
    <EventMapContainer />
  </div>
);

export default EventVisualizer;
