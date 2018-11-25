// Surpress to allow links inside body copy without needing to line break.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLink from './ArticleLink';

const Credits = () => (
  <article
    className='article'
  >
    <Link className='bigButton bigButton--right' to='/' title='Back to map' alt='Back to map'>
      <svg className='bigButton__icon'>
        <use href='icons/sprite.svg#backArrow' />
      </svg>
    </Link>
    <h1 className='article__heading'>Credits</h1>
    <p className='article__copy'>
      Every icon used in this application was taken from <ArticleLink href='https://thenounproject.com/'>The Noun Project</ArticleLink>, 
      a website with "Over a million curated icons, created by a global community".
    </p>
    <ul className='article__credits'>
      <li></li>
    </ul>
  </article>
);

export default Credits;
