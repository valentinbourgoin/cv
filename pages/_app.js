import { React, useEffect, Fragment } from 'react';

import Head from 'next/head'
import { appWithTranslation, useTranslation } from 'next-i18next';

import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

import Header from '../components/header';
import Footer from '../components/footer';

// Import template CSS
import '../css/vendor.css'
import '../css/base.css'
import '../css/fonts.css'
import '../css/main.css'

const Cv = function({ Component, pageProps }) {
  const { t } = useTranslation();

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []); 

  return (
    <Fragment>
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
    </Fragment>
	)
}

export default appWithTranslation(Cv);
