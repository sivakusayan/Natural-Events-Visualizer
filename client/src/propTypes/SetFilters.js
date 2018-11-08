import PropTypes from 'prop-types';

/**
 * A collection of functions that can set the filters
 * of their respective fields for searching. Used
 * heavily within the Filters subcomponent of
 * the Search component.  
 */

const SetFilters = PropTypes.shape({
  latitude: PropTypes.func.isRequired,
  longitude: PropTypes.func.isRequired,
  radius: PropTypes.func.isRequired,
  addToCategories: PropTypes.func.isRequired,
  removeFromCategories: PropTypes.func.isRequired,
  startDate: PropTypes.func.isRequired,
  endDate: PropTypes.func.isRequired,
});

export default SetFilters;
