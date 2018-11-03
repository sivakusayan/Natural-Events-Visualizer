/**
 * @fileoverview Renders the main UI for the application.
 */
import React from 'react';

import SearchContainer from '../containers/Search/indexContainer';

const EventVisualizer = ({ events }) => (
  <SearchContainer events={events} />
);

export default EventVisualizer;
