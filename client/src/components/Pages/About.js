import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <article
    className='about'
  >
    <Link to='/'>Go back</Link>
    <h1>This is the about page.</h1>
  </article>
);

export default About;
