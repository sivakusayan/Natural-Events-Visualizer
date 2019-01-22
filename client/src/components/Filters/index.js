import React from 'react';
import { Link } from 'react-router-dom';

import LocationFilterContainer from '../../containers/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../containers/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../containers/Filters/DateFilterContainer';

const Filters = () => (
  <section className='filters'>
    <div className='bigButton-container'>
      <Link className='bigButton' to='/search'>
        <svg className='bigButton__icon'>
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
