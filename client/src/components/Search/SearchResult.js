
import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../propTypes/Event';
import CATEGORIES from '../../constants/copy/CATEGORIES';
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
      className='search-result'
    >
      <div className='search-result__category'>
        <svg className='search-result__icon'>
          <use href={`icons/spritesheet.svg#${toCamelCase(CATEGORIES[event.properties.category].title)}`} />
        </svg>
      </div>
      <div className='search-result__info'>
        <p className='search-result__title'>
          {event.properties.title}
        </p>
        <p className='search-result__location'>
          {parseLocation(event.geometry.location[event.geometry.location.length - 1])}
        </p>
      </div>
    </li>
  );
};

SearchResult.propTypes = {
  event: Event.isRequired,
  selectEvent: PropTypes.func.isRequired,
};

export default SearchResult;
