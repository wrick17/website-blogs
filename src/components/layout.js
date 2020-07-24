import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';

import '@css/common.css';
import '@css/typography.css';
import '@css/styles.css';
import '@css/layout.css';

import { defaultImage } from '@common';

const Layout = ({ children, noHeader, headerProps, meta = {} }) => {
  const title = meta.title || 'Pratyush Poddar | Wrick';
  const description =
    meta.description || 'About Pratyush Poddar (wrick17) and his blogs';
  const link = meta.link || 'https://www.wrick17.com/';
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
        <link rel="canonical" href={link} />
        
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageSrc} />
        <meta property="og:url" content={link} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@wrick7132" />
        <meta name="twitter:creator" content="@wrick7132" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageSrc} />
      </Helmet>
      <div className={noHeader ? '' : 'container'}>{children}</div>
    </main>
  );
};

export default Layout;
