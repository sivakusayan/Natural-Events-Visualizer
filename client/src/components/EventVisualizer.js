/**
 * @fileoverview Renders the main UI for the application.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Event from '../propTypes/Event';
import SearchContainer from '../containers/Search/indexContainer';
import EventMap from './Map/EventMap';

const EventVisualizer = ({ events }) => (
  <div>
    {/* <SearchContainer events={events} /> */}
    <EventMap events={events} />
  </div>
);

EventVisualizer.propTypes = {
  /**
   * Array of events used to initialize the EventMap
   * and Search results.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default EventVisualizer;
