import React, { Fragment } from 'react';

const Image = ({ src, alt, className = '', source }) => {
  return (
    <Fragment>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`blog-image ${className}`}
      />
      <span className="source">{source ? `Source : ${source}` : ''}</span>
    </Fragment>
  );
};

export default Image;
