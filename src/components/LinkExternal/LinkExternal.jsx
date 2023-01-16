import React from 'react';
import propTypes from 'prop-types';

export default function LinkExternal(props) {
  const { href, target, children } = props;
  const rel = target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

LinkExternal.propTypes = {
  href: propTypes.string,
  target: propTypes.string,
  children: propTypes.node.isRequired,
};

LinkExternal.defaultProps = {
  href: '#',
  target: '_self'
};
