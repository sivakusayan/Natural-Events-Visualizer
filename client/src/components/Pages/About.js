import React from 'react';

import ToggleMainPageLinkContainer from '../../containers/Links/ToggleMainPageLinkContainer';

const About = () => (
  <div>
    <ToggleMainPageLinkContainer to='/'>Go back</ToggleMainPageLinkContainer>
    <h1>This is the about page.</h1>
  </div>
);

export default About;
