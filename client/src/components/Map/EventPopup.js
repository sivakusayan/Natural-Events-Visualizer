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
        <div className='popup__primary'>
          <h2 className='popup__title'>{selectedEvent.properties.title}</h1>
          <svg className='popup__icon'>
            <use href={`icons/sprite.svg#${eventIconName}`} />
          </svg>
        </div>
        <div className='popup__secondary'>
    
        </div>
      </div>
    </Popup>
  );
}

EventPopup.propTypes = {
  selectedEvent: Event.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
