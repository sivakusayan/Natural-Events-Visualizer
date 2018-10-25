/**
 * @fileoverview This component controls how a single search result
 * is rendered.
 */

import React from 'react';

export default ({ event }) => (
  <li>
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
  </li>
);
