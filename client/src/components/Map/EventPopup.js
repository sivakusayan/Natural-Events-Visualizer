import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-mapbox-gl';
import dayjs from 'dayjs';

import Event from '../../propTypes/Event';
import toCamelCase from '../../utils/toCamelCase';
import parseLocation from '../../utils/parseLocation';
import CATEGORIES from '../../constants/copy/CATEGORIES';
import SOURCES from '../../constants/copy/SOURCES';

const EventPopup = ({ selectedEvent, coordinates }) => {
  const { properties, geometry } = selectedEvent;
  // Filter out sources which seem to link to inaccessible government websites or not useful for general audience
  const sources = properties.sources.filter(source => !source.id.match(/^(PDC|JTWC|GDACS)$/));
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
  const style = {
    borderTop: `4px solid ${CATEGORIES[properties.category].color}`,
  };
  return (
    <Popup coordinates={coordinates}>
      <div style={style} className='popup'>
        <div className='popup__primary'>
          <h2 className='popup__title'>{selectedEvent.properties.title}</h2>
          <svg className='popup__event-icon'>
            <use href={`icons/spritesheet.svg#${eventIconName}`} />
          </svg>
        </div>
        <div className='popup__secondary'>
          {/*  We show the latest date and location for an event for now. 
            TODO: Time evolution for LineStrings? */}
          <div className='popup__date'>
            <svg className='popup__date-icon'>
              <use href='icons/spritesheet.svg#clock' />
            </svg>
            <span>{dateString}</span>
          </div>
          <div className='popup__location'>
            <svg className='popup__date-icon'>
              <use href='icons/spritesheet.svg#location' />
            </svg>
            <span>{locationString}</span>
          </div>
          <div className='popup__search'>
            <svg className='popup__search-icon'>
              <use href='icons/spritesheet.svg#google' />
            </svg>
            <a
              className='link'
              rel='noopener noreferrer'
              target='_blank'
              href={query}
            >
                Google it!
            </a>
          </div>
        </div>
        {sources.length > 0 && (
        <div className='popup__tertiary'>
          <h4 className='popup__sub-heading'>Additional Sources</h4>
          <ul className='popup__sources'>
            {sources.map(source => (
              <li className='popup__source'>
                <a
                  className='link'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={source.url}
                >
                  {/* Some sources seem to link CSV files with event data.
                  Make it clear to the user just in case. */}
                  {SOURCES[source.id] + (source.url.match(/.csv$/) ? ' (CSV File)' : '')}
                </a>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </Popup>
  );
};

EventPopup.propTypes = {
  selectedEvent: Event.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EventPopup;
