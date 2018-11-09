/**
 * @fileoverview This component controls how the filtering options will be rendered.
 * It acts as an intermediary between the entire Search component and 
 * the smaller filters, and assigns a job to each filter.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import LocationFilterContainer from '../../containers/Filters/LocationFilterContainer';
import CategoryFilterContainer from '../../containers/Filters/CategoryFilterContainer';
import DateFilterContainer from '../../containers/Filters/DateFilterContainer';

const Filters = () => (
  <div>
    <Link to='/search'>Back to Search</Link>
    <CategoryFilterContainer />
    <LocationFilterContainer />
    <DateFilterContainer />
  </div>
);

export default Filters;
