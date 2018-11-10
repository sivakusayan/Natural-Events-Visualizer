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
  selectedEvent: Event.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
