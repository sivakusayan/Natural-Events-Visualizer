import PropTypes from 'prop-types';

/**
 * A collection of values that describe the current
 * filters used in the application. Used heavily within
 * the search component.
 */

const FilterValues = PropTypes.shape({
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.number).isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
});

export default FilterValues;
