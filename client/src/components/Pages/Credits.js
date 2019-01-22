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
    <div className='bigButton-container'>
      <Link className='bigButton' to='/menu' title='Back to menu' alt='Back to menu'>
        <svg className='bigButton__icon'>
          <use href='icons/spritesheet.svg#backArrow' />
        </svg>
      </Link>
    </div>
    <h1 className='article__heading'>Credits</h1>
    <p className='article__copy'>
      Nearly every icon used in this application is taken from <ArticleLink href='https://thenounproject.com/'>The Noun Project</ArticleLink> under
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
