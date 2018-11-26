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
      Every icon used in this application is taken from <ArticleLink href='https://thenounproject.com/'>The Noun Project</ArticleLink> under 
      the Creative Commons License. The icon designers are credited below.
    </p>
    <ul className='article__credits'>
      <li className='article__credit'>"radioactive" by Alexander Skowalsky</li>
      <li className='article__credit'>"filter" by Chunk Icons</li>
      <li className='article__credit'>"Natural Disasters" by Claudia Revalina</li>
      <li className='article__credit'>"hot temperature" by emilegraphics</li>
      <li className='article__credit'>"typhoon" by Hayashi Fumihiro</li>
      <li className='article__credit'>"Earthquake" by Hayashi Fumihiro</li>
      <li className='article__credit'>"Drought" by Hayashi Fumihiro</li>
      <li className='article__credit'>"Landslide" by Hayashi Fumihiro</li>
      <li className='article__credit'>"dust" by Jory Raphael</li>
      <li className='article__credit'>"Iceberg" by Juan Pablo Bravo</li>
      <li className='article__credit'>"Volcano" by kareemovic</li>
      <li className='article__credit'>"Arrow" by Kirsh</li>
      <li className='article__credit'>"Snow" by Manuela Ribas</li>
      <li className='article__credit'>"Change appearance drop" by Marek Polakovic</li>
      <li className='article__credit'>"find" by Three Six Five</li>
      <li className='article__credit'>"menu" by Three Six Five</li>
      <li className='article__credit'>"Flood" by Yang LIU</li>
    </ul>
  </article>
);

export default Credits;
