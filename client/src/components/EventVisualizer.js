/**
 * @fileoverview Renders the main UI for the application.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Event from '../propTypes/Event';
import SearchContainer from '../containers/Search/indexContainer';
import EventMap from './Map/EventMap';

const EventVisualizer = () => (
  <div>
    {/* <SearchContainer events={events} />  */}
    <EventMap />
  </div>
);

export default EventVisualizer;
