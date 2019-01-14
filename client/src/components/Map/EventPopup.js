import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';
import dayjs from 'dayjs';

import Event from '../../propTypes/Event';
import toCamelCase from '../../utils/toCamelCase';
import parseLocation from '../../utils/parseLocation';
import CATEGORIES from '../../constants/CATEGORIES';

const EventPopup = ({ selectedEvent, coordinates }) => {
  const eventIconName = toCamelCase(CATEGORIES[selectedEvent.properties.category].title);
  return (
    <Popup coordinates={coordinates}>
      <div className='popup'>
        <div className='popup__primary'>
          <h2 className='popup__title'>{selectedEvent.properties.title}</h2>
          <svg className='popup__icon'>
            <use href={`icons/sprite.svg#${eventIconName}`} />
          </svg>
        </div>
        <div className='popup__secondary'>
          {/*  We show the latest date for an event for now. 
            TODO: Time evolution for LineStrings? */}
          <div className='popup__date'>
            {dayjs(selectedEvent.geometry.date[selectedEvent.geometry.date.length - 1]).format('MMM. D, YYYY')}
          </div>
          <a
            className='popup__search'
            rel='noopener noreferrer'
            target='_blank'
            href={`https://www.google.com/search?q=${selectedEvent.properties.title}`}
          >
              Google it!
          </a>
          <div className='popup__location'>
            {parseLocation(selectedEvent.geometry.location[selectedEvent.geometry.location.length - 1])}
          </div>
        </div>
      </div>
    </Popup>
  );
};

EventPopup.propTypes = {
  selectedEvent: Event.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
