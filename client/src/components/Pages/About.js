// Surpress to allow links inside body copy without needing to line break.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLink from './ArticleLink';

const About = () => (
  <section
    className='article'
  >
    <Link className='bigButton bigButton--right' to='/' title='Back to map' alt='Back to map'>
      <svg className='bigButton__icon'>
        <use href='icons/sprite.svg#backArrow' />
      </svg>
    </Link>
    <h2 className='article__heading'>About</h2>
    <p className='article__copy'>
      This application was made using <ArticleLink href='https://eonet.sci.gsfc.nasa.gov/eonet-project'>EONET</ArticleLink>, 
      an API which gathers information on recent natural events. Data is pulled from the API, processed, 
      and then stored in a database, making it so the application has access to both old and new data.
    </p>
    <h2 className='article__heading'>Technologies Used</h2>
  </section>
);

export default About;
