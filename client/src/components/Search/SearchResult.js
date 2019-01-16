
import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../propTypes/Event';
import CATEGORIES from '../../constants/CATEGORIES';
import toCamelCase from '../../utils/toCamelCase';
import parseLocation from '../../utils/parseLocation';

const SearchResult = ({ event, selectEvent }) => {
  const onClick = () => selectEvent(event._id);
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };
  return (
    <li
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onKeyPress}
      role='menuItem'
      className='result'
    >
      <div className='result__title'>
        {event.properties.title}
      </div>
      <div className='result__location'>
        {parseLocation(event.geometry.location[event.geometry.location.length - 1])}
      </div>
      <div className='result__category'>
        <svg className='result__icon'>
          <use href={`icons/sprite.svg#${toCamelCase(CATEGORIES[event.properties.category].title)}`} />
        </svg>
      </div>
    </li>
  );
};

SearchResult.propTypes = {
  event: Event.isRequired,
  selectEvent: PropTypes.func.isRequired,
};

export default SearchResult;
