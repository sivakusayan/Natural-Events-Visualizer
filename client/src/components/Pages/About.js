import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <article
    className='article'
  >
    <Link className='bigButton bigButton--right' to='/' title='Back to map' alt='Back to map'>
      <svg className='bigButton__icon'>
        <use href='icons/sprite.svg#backArrow' />
      </svg>
    </Link>
    <h1 className='article__heading'>About</h1>
    <p className='article__copy'>This is the about page copy.</p>
  </article>
);

export default About;
