import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import { connect } from 'react-redux';

import fetchRetry from '../../../../utils/fetchRetry';
import SearchBar from '../../components/Search/SearchBar';
import { isValidLatitude, isValidLongitude, isValidRadius } from '../../utils/isValid';


const SearchBarContainer = ({
  setEvents, startLoading, doneLoading, setError, removeError, filters, filtersAreActive,
}) => {
  const buildFilterQuery = () => {
    const queryArray = [];
    const {
      location,
      categories,
      startDate,
      endDate,
    } = filters;
    const {
      location: locationIsActive,
      categories: categoriesIsActive,
      startDate: startDateIsActive,
      endDate: endDateIsActive,
    } = filtersAreActive;
    // Note that we first check if the filter is active before adding the
    // filter to the search query.
    if (locationIsActive
        && isValidLatitude(location.latitude)
        && isValidLongitude(location.longitude)
        && isValidRadius(location.radius)) {
      queryArray.push(`lat=${location.latitude}`);
      queryArray.push(`long=${location.longitude}`);
      queryArray.push(`radius=${location.radius}`);
    }
    if (categoriesIsActive && categories.length > 0) {
      queryArray.push(`categories=${categories.join(',')}`);
    }
    if (startDateIsActive && startDate) {
      queryArray.push(`startDate=${startDate}`);
    }
    if (endDateIsActive && endDate) {
      queryArray.push(`endDate=${endDate}`);
    }
    return queryArray.join('&');
  };

  const search = (title) => {
    // Start loading outside of debounced function, else startLoading and removeError
    // will be debounced as well
    console.log(`http://localhost:3000/api/events?title=${title}&${buildFilterQuery()}`);
    fetchRetry(`http://localhost:3000/api/events?title=${title}&${buildFilterQuery()}`)
      .then(events => setEvents(events))
      .catch(setError)
      .finally(doneLoading);
  };

  // startLoading and removeError here won't work. I'm guessing that calling the debounced 
  // function inside the method body somehow makes the debounced calls not detect each other,
  // so we get multiple calls being delayed instead of them cancelling each other out. 
  const debouncedSearch = debounce(500, search);

  return (
    <SearchBar
      startLoading={startLoading}
      removeError={removeError}
      debouncedSearch={debouncedSearch} 
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters,
  filtersAreActive: state.filtersAreActive,
  startLoading: ownProps.startLoading,
  removeError: ownProps.removeError,
});

SearchBarContainer.propTypes = {
  setEvents: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  doneLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  removeError: PropTypes.func.isRequired,
  /**
   * A collection of values that describe the current
   * filters used in the application.
   */
  filters: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      radius: PropTypes.number.isRequired,
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Object that contains information on which
   * filters are enabled or disabled. Filters
   * that are disabled will not be applied to
   * the search query.
   */
  filtersAreActive: PropTypes.shape({
    location: PropTypes.bool.isRequired,
    categories: PropTypes.bool.isRequired,
    startDate: PropTypes.bool.isRequired,
    endDate: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(SearchBarContainer);
