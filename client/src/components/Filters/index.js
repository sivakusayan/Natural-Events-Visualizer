import React from 'react';
import { Link } from 'react-router-dom';

import LocationFilterContainer from '../../containers/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../containers/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../containers/Filters/DateFilterContainer';

const Filters = () => (
  <section className='filters'>
    <div className='btn-constainer'>
      <Link className='btn--big' to='/search'>
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
