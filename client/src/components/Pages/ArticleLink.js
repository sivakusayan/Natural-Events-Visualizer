import React from 'react';
import PropTypes from 'prop-types';

const ArticleLink = ({ href, children }) => (
  <a
    className='link'
    target='_blank'
    // We add this line in order to account for possible security risks. See:
    // https://mathiasbynens.github.io/rel-noopener/#hax
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

ArticleLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

ArticleLink.defaultProps = {
  href: '',
  children: '',
};

export default ArticleLink;
