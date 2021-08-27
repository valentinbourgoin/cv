// Import template CSS
import '../css/vendor.css'
import '../css/base.css'
import '../css/fonts.css'
import '../css/main.css'

import Header from '../components/header';
import Footer from '../components/footer';

// Import template JS
//import '../scripts/pace.min.js'
//import '../scripts/jquery-3.5.1.min.js'
//import '../scripts/plugins.js'
// import '../scripts/main.js'

export default function Cv({ Component, pageProps }) {
    return (
			<div>
        <Header />
        <Component {...pageProps} />
        <Footer />
		</div>
	)
}