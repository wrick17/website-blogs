import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';

import '@css/common.css';
import '@css/typography.css';
import '@css/styles.css';
import '@css/layout.css';

import { defaultImage } from '@common';

const Layout = ({ children, noHeader, headerProps, meta = {} }) => {
  const imageSrc = meta.image
    ? meta.image.indexOf('http') === 0
      ? meta.image
      : require(`@images/${meta.image}`)
    : defaultImage;

  return (
    <main>
      {noHeader ? null : <Header {...headerProps} />}
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{meta.title || 'Wrick'}</title>
        <link rel="canonical" href={meta.link || 'https://www.wrick17.com/'} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={
            meta.description || 'About Pratyush Poddar (wrick17) and his blogs'
          }
        />
        <meta property="og:title" content={meta.title} />
        {meta.description ? (
          <meta
            property="og:description"
            content={
              meta.description ||
              'About Pratyush Poddar (wrick17) and his blogs'
            }
          />
        ) : null}
        <meta property="og:image" content={imageSrc} />
      </Helmet>
      <div className={noHeader ? '' : 'container'}>{children}</div>
    </main>
  );
};

export default Layout;
