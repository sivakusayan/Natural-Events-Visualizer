import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';

import Event from '../../propTypes/Event';

import CATEGORIES from '../../constants/CATEGORIES';

const EventPopup = ({ selectedEvent, coordinates }) => (
  <Popup coordinates={coordinates}>
    <div className='popup'>
      <h1>{selectedEvent.properties.title}</h1>
      <p>{CATEGORIES[selectedEvent.properties.category].title}</p>
    </div>
  </Popup>
);

EventPopup.propTypes = {
  selectedEvent: Event.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
