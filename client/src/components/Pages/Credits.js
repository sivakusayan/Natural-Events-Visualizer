// Surpress to allow links inside body copy without needing to line break.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import ArticleLink from './ArticleLink';
import CREDITS from '../../constants/copy/CREDITS';

const Credits = () => (
  <section
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
      {/* <li className='article__credit'>
        <ArticleLink href='https://thenounproject.com/term/radioactive/573656/'>Radioactive</ArticleLink> by Alexander Skowalsky
      </li> */}
      {CREDITS.map(author => (
        <li className='article__credit'>
          {author.icons.map(
            icon => <ArticleLink href={icon.link}>{icon.title}</ArticleLink>
            // Emulates a join function with jsx. Here, we join with ', '
          ).reduce((accu, link) => (accu === null ? [link] : [...accu, ', ', link]), null)
          } by {author.name}
        </li>
      ))}
    </ul>
  </section>
);

export default Credits;
