import React from 'react';
import { Link } from 'react-router-dom';

import LocationFilterContainer from '../../containers/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../containers/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../containers/Filters/DateFilterContainer';

const Filters = () => (
  <section>
    <Link to='/search'>Back to Search</Link>
    <CategoryFilterContainer />
    <LocationFilterContainer />
    <DateFilterContainer />
  </section>
);

export default Filters;
