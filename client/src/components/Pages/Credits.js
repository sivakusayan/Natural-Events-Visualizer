// Surpress to allow links inside body copy without needing to line break.
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import ButtonContainer from '../utils/ButtonContainer';
import ArticleLink from './ArticleLink';
import CREDITS from '../../constants/copy/CREDITS';

const Credits = () => (
  <section
    className='article'
  >
    {/* If smaller than this device width, we have the btn-container to navigate */}
    <MediaQuery query='(min-device-width: 56.25em)'>
      <Link className='btn btn--small' to='/' title='Back to Map' alt='Back to Map'>
        <svg className='btn__icon'>
          <use href='icons/spritesheet.svg#back' />
        </svg>
      </Link>
    </MediaQuery>
    <ButtonContainer
      firstBtn={{ icon: 'back', title: 'Back to map', to: '/' }}
    />
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
