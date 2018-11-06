/**
 * Renders the popup that is located at the selectedEvent, if one
 * exists.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';

const EventPopup = ({ selectedEvent, coordinates }) => (
  <Popup coordinates={coordinates}>
    <h1>This is a popup! {!!selectedEvent && selectedEvent._id}</h1>
  </Popup>
);

export default EventPopup;
