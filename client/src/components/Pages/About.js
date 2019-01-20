// Surpress to allow links inside body copy without needing to line break.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLink from './ArticleLink';

const About = () => (
  <section
    className='article'
  >
    <Link className='bigButton bigButton--left' to='/menu' title='Back to menu' alt='Back to menu'>
      <svg className='bigButton__icon'>
        <use href='icons/spritesheet.svg#backArrow' />
      </svg>
    </Link>
    <h2 className='article__heading'>About</h2>
    <p className='article__copy'>
      EONEV (Earth Observatory Natural Event Visualizer) is an application that provides a visual interface for displaying natural disasters on the world map. The data is gathered from <ArticleLink href='https://eonet.sci.gsfc.nasa.gov/eonet-project'>EONET</ArticleLink>, an API formed by NASA that lists recent natural events. Feel free to manually explore the map, or search through the database for a specific event if you like!
    </p>
    <p className='article__copy'>
      Note that the collected spatial and temporal data are only approximations. As noted on the EONET project website:
    </p>
    <blockquote className='article__quote'>
      All EONET metadata and services are intended to be used for visualization and general information purposes only and should not be construed as “official” with regards to spatial or temporal extent. Spatial and temporal extents of natural events represented in EONET are based on multiple sources and often these representations are approximations at best.
    </blockquote>
  </section>
);

export default About;
