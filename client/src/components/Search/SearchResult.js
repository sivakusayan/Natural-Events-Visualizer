/**
 * @fileoverview This component controls how a single search result
 * is rendered.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../propTypes/Event';

const SearchResult = ({ event, selectEvent }) => {
  /**
   * Sets the selected event in the redux store to be 
   * this event.
   */
  const setSelectedEvent = () => selectEvent(event._id);
  /**
   * Equivalent to the above. Fires on the enter key.
   */
  const onKeyPress = (e) => {
    if (e.key === 'Enter') setSelectedEvent();
  };
  return (
    <div
      tabIndex={0}
      onClick={setSelectedEvent}
      onKeyPress={onKeyPress}
      role='menuItem'
    >
      <div className='id'>
        Event ID:
        {event._id}
      </div>
      <div className='title'>
        Title:
        {event.properties.title}
      </div>
      <div className='category'>
        Category:
        {event.properties.categories}
      </div>
      <div className='location'>
        Location:
        {event.geometry.location.city}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  /**
   * The event data to render with.
   */
  event: Event.isRequired,
  /**
   * Dispatches an action to set the 
   * selected event.
   */
  selectEvent: PropTypes.func.isRequired,
};

export default SearchResult;
