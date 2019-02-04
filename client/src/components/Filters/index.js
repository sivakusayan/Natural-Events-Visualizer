import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import ButtonContainer from '../utils/ButtonContainer';
import LocationFilterContainer from '../../containers/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../containers/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../containers/Filters/DateFilterContainer';

const Filters = () => (
  <section className='filters'>
    {/* If smaller than this device width, we have the btn-container to navigate */}
    <MediaQuery query='(min-device-width: 56.25em)'>
      <Link className='btn btn--small' to='/' title='Back to Search' alt='Back to Search'>
        <svg className='btn__icon'>
          <use href='icons/spritesheet.svg#back' />
        </svg>
      </Link>
    </MediaQuery>
    <ButtonContainer
      secondBtn={{ icon: 'back', title: 'Back to Search', to: '/search' }}
    />
    <CategoryFilterContainer />
    <LocationFilterContainer />
    <DateFilterContainer />
  </section>
);

export default Filters;
