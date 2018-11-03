/**
 * @fileoverview Renders the main UI for the application.
 */
import React from 'react';

import SearchContainer from '../containers/Search/indexContainer';
import EventMap from './Map/EventMap';

const EventVisualizer = () => (
  <div>
    {/* <SearchContainer />  */}
    <EventMap />
  </div>
);

export default EventVisualizer;
