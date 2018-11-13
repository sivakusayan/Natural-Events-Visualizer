import React from 'react';

import LoadingIcon from './LoadingIcon';

const LoadingScreen = () => (
  <div className='loadingScreen'>
    <LoadingIcon />
    <span className='loadingScreen__text'>Getting everything ready ...</span>
  </div>
);

export default LoadingScreen;
