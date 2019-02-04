import React from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from '../Loading/LoadingIcon';

const SearchMessage = ({ isLoading, error, results }) => (
  <div className='search__message'>
    {isLoading && <LoadingIcon className='search__loading-icon' />}
    {error && <p className='search__error'>Sorry, something went wrong.</p>}
    {(results.length === 0 && !isLoading && !error)
      && <p className='search__error'>No search results have been found.</p>}
  </div>
);

SearchMessage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
}

export default SearchMessage;
