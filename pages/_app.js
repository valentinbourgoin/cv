// Import template CSS
import '../css/vendor.css'
import '../css/base.css'
import '../css/fonts.css'
import '../css/main.css'

// Import template JS
//import '../scripts/pace.min.js'
//import '../scripts/jquery-3.5.1.min.js'
//import '../scripts/plugins.js'
// import '../scripts/main.js'

export default function Cv({ Component, pageProps }) {
    return (
			<div>
			<header>
				<div className="row">
					<div className="top-bar">
						<a className="menu-toggle" href="#"><span>Menu</span></a>
						<div className="logo">
							<a href="/">John Muller</a>
						</div>		      
						<nav id="main-nav-wrap">
							<ul className="main-navigation">
								<li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
								<li><a className="smoothscroll"  href="#about" title="">About</a></li>
								<li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
								<li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
								<li><a className="smoothscroll"  href="#services" title="">Services</a></li>					
								<li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>		
							</ul>
						</nav>    		
					</div>
				</div>
			</header>
			<Component {...pageProps} />
		</div>
	)
}