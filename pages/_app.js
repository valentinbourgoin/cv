import React from 'react';

import Head from 'next/head'
import { appWithTranslation, useTranslation } from 'next-i18next';

import Header from '../components/header';
import Footer from '../components/footer';

// Import template CSS
import '../css/vendor.css'
import '../css/base.css'
import '../css/fonts.css'
import '../css/main.css'

const Cv = function({ Component, pageProps }) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
	)
}

export default appWithTranslation(Cv);
