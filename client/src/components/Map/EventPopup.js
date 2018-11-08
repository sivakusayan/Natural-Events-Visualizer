/**
 * Renders the popup that is located at the selectedEvent, if one
 * exists.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';

import Event from '../../propTypes/Event';

const EventPopup = ({ selectedEvent, coordinates }) => (
  <Popup coordinates={coordinates}>
    <h1>This is a popup! {!!selectedEvent && selectedEvent._id}</h1>
  </Popup>
);

EventPopup.propTypes = {
  /**
   * The event object associated with the ID of the
   * current selected event.
   */
  selectedEvent: Event.isRequired,
  /**
   * The coordinates the popup will be located at.
   */
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
