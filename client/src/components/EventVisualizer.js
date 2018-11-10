
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MobileLayout from './MobileLayout';

class EventVisualizer extends React.Component {
  state = {
    isMobile: true,
  }

  render() {
    const { isMobile } = this.state;
    return (
      <Router>
        {isMobile ? <MobileLayout /> : <h1>You are on a desktop.</h1>}
      </Router>
    );
  }
}

export default EventVisualizer;
