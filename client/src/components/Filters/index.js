import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import LocationFilterContainer from '../../containers/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../containers/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../containers/Filters/DateFilterContainer';

const Filters = () => (
  <section className='filters'>
    {/* If smaller than this device width, we have the btn-container to navigate */}
    <MediaQuery query='(min-device-width: 56.25em)'>
      <Link className='btn btn--small' to='/' title='Back to Search' alt='Back to Search'>
        <svg className='filters__icon'>
          <use href='icons/spritesheet.svg#back' />
        </svg>
      </Link>
    </MediaQuery>
    <div className='btn-container'>
      <Link className='btn btn--big' to='/search'>
        <svg className='btn--big__icon'>
          <use href='icons/spritesheet.svg#backArrow' />
        </svg>
      </Link>
    </div>
    <CategoryFilterContainer />
    <LocationFilterContainer />
    <DateFilterContainer />
  </section>
);

export default Filters;
