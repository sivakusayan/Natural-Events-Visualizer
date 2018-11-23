import React from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from './LoadingIcon';

const LoadingScreen = ({ dataIsLoading, mapIsLoading }) => (
  <div className={`loadingScreen overlay ${!dataIsLoading ? 'almostDoneLoading' : ''}`}>
    <LoadingIcon />
    {dataIsLoading && <p className='loadingScreen__text'>Data is loading...</p>}
    {/* We render this text after data is done loading, since map load times will almost 
    always take longer than data loading times. */}
    {!dataIsLoading && mapIsLoading && <p className='loadingScreen__text'>Map is loading...</p>}
  </div>
);

LoadingScreen.propTypes = {
  dataIsLoading: PropTypes.bool,
  mapIsLoading: PropTypes.bool,
};

LoadingScreen.defaultProps = {
  dataIsLoading: true,
  mapIsLoading: true,
};

export default LoadingScreen;
