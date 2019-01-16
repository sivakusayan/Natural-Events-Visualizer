import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';
import dayjs from 'dayjs';

import Event from '../../propTypes/Event';
import toCamelCase from '../../utils/toCamelCase';
import parseLocation from '../../utils/parseLocation';
import CATEGORIES from '../../constants/CATEGORIES';

const EventPopup = ({ selectedEvent, coordinates }) => {
  const { properties, geometry } = selectedEvent;
  // Filter out sources which seem to link to inaccessible government websites or not useful for general audience
  const sources = properties.sources.filter(source => !source.id.match(/^(PDC|JTWC|BYU_ICE|NATICE|GDACS)$/));
  const eventName = CATEGORIES[properties.category].title;
  const eventIconName = toCamelCase(eventName);
  const locationString = parseLocation(geometry.location[geometry.location.length - 1]);
  let dateString;
  if (geometry.type === 'Point' || geometry.type === 'Polygon') {
    // We only have one date for events that don't evolve over time
    dateString = dayjs(selectedEvent.geometry.date[selectedEvent.geometry.date.length - 1]).format('MMM. D, YYYY');
  } else if (geometry.type === 'LineString') {
    // For events that do evolve over time, get the start date and latest date
    const startDate = dayjs(selectedEvent.geometry.date[0]).format('MMM. D, YYYY');
    const endDate = dayjs(selectedEvent.geometry.date[selectedEvent.geometry.date.length - 1]).format('MMM. D, YYYY');
    dateString = `${startDate} ~ ${endDate}`;
  }
  let query;
  if (eventName === 'Wildfires') {
    // If the event is a wildfire, due to undescriptive event names we add the location and date
    // to return more relevant results
    query = `https://www.google.com/search?q=${properties.title}+${locationString}+${dateString}`;
  } else {
    // Else, the event name should be descriptive enough for a search
    query = `https://www.google.com/search?q=${properties.title}`;
  }
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
          {/*  We show the latest date and location for an event for now. 
            TODO: Time evolution for LineStrings? */}
          <div className='popup__date'>
            {dateString}
          </div>
          <div className='popup__location'>
            {locationString}
          </div>
          <div className='popup__search'>
            <a
              className='popup__link'
              rel='noopener noreferrer'
              target='_blank'
              href={query}
            >
                Google it!
            </a>
          </div>
          {sources.length > 0 && (
            <div className='popup__sources'>
              <h4>Additional Sources</h4>
              {sources.map(source => (
                <a
                  className='popup__link'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={source.url}
                >
                  {source.id}
                </a>
              ))}
            </div>
          )}
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
