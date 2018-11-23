import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';

import Event from '../../propTypes/Event';
import toCamelCase from '../../utils/toCamelCase';
import CATEGORIES from '../../constants/CATEGORIES';

const EventPopup = ({ selectedEvent, coordinates }) => {
  const eventIconName = toCamelCase(CATEGORIES[selectedEvent.properties.category].title);
  return (
    <Popup coordinates={coordinates}>
      <div className='popup'>
        <h1>{selectedEvent.properties.title}</h1>
        <svg>
          <use href={`icons/sprite.svg#${eventIconName}`} />
        </svg>
      </div>
    </Popup>
  );
}

EventPopup.propTypes = {
  selectedEvent: Event.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
