
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LayoutMobile from './Layouts/LayoutMobile';

class EventVisualizer extends React.Component {
  state = {
    isMobile: true,
  }

  render() {
    const { isMobile } = this.state;
    return (
      <BrowserRouter>
        {isMobile ? <LayoutMobile /> : <h1>You are on a desktop.</h1>}
      </BrowserRouter>
    );
  }
}

export default EventVisualizer;
