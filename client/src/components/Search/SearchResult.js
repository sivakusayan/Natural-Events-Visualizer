
import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../propTypes/Event';

const SearchResult = ({ event, selectEvent }) => {
  const onClick = () => selectEvent(event._id);
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };
  return (
    <div
      tabIndex={0}
      onClick={onClick}
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
  event: Event.isRequired,
  selectEvent: PropTypes.func.isRequired,
};

export default SearchResult;
