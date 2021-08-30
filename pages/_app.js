// Import template CSS
import '../css/vendor.css'
import '../css/base.css'
import '../css/fonts.css'
import '../css/main.css'

import Header from '../components/header';
import Footer from '../components/footer';

import Head from 'next/head'

// Import template JS
//import '../scripts/pace.min.js'
//import '../scripts/jquery-3.5.1.min.js'
//import '../scripts/plugins.js'
// import '../scripts/main.js'

export default function Cv({ Component, pageProps }) {
    return (
			<div>
        <Head>
          <title>Valentin Bourgoin | CTO / CPO on-demand</title>
          <meta name="description" content="Passionate about Tech, Product and Sports, I help teams deliver and achieve their goals. I have been working for 12 years closely with Tech & Product teams. My background as an engineer gives me the opportunity to be involved in the technical direction while being obsessed with product quality and user experience." />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
          <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
		</div>
	)
}