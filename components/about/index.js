const About = () => (
	<section id="about">  
	<div className="row section-intro">
		<div className="col-twelve">
			<h5>About</h5>
			<h1>Let me introduce myself.</h1>
			<div className="intro-info">
				<img 
          src="/images/profile-pic.jpg" 
          alt="Valentin Bourgoin"
        />
				<p className="lead">
					Passionate about Tech, Product and Sports, I help teams deliver and achieve their goals. <br />
					My day-to-day:
					<ul>
						<li>Solve problems, a lot.</li>
						<li>Build a roadmap and prioritize features.</li>
						<li>Lead teams and give technical direction.</li>
						<li>Organize delivery and set up processes.</li>
						<li>Run as fast as possible and pedal as long as possible...</li>
					</ul>
				</p>
			</div>   			
		</div>   		
	</div>
	<div className="row about-content">
		<div className="col-six tab-full">
			<h3>Profile</h3>
			<p>
				Graduated as an engineer, I have been working for 12 years closely with Tech & Product teams. 
				My background as a developer gives me the opportunity to be involved in the technical direction while being obsessed with product quality and user experience.
			</p>
			<ul className="info-list">
				<li>
					<strong>Fullname:</strong>
					<span>Valentin Bourgoin</span>
				</li>
				<li>
					<strong>Age:</strong>
					<span>34 yo</span>
				</li>
				<li>
					<strong>Location:</strong>
					<span>Nantes, France</span>
				</li>
				<li>
					<strong>Email:</strong>
					<span>hello@valentinbourgoin.fr</span>
				</li>
			</ul>
		</div>
		<div className="col-six tab-full">
			<h3>Skills</h3>
			<p>I can take part in the setup of delivery processes, the general management of teams, the building of a roadmap or the choice of technical architecture for the product.</p>
				<ul className="skill-bars">
					<li>
					<div className="progress percent90"></div>
					<strong>Team management</strong>
					</li>
					<li>
					<div className="progress percent90"></div>
					<strong>Agile methodologies</strong>
					</li>
					<li>
					<div className="progress percent90"></div>
					<strong>Product Roadmap</strong>
					</li>
					<li>
					<div className="progress percent75"></div>
					<strong>Technical specifications</strong>
					</li>
					<li>
					<div className="progress percent60"></div>
					<strong>Code stuff</strong>
					</li>
				</ul>
		</div>
	</div>
	<div className="row button-section">
		<div className="col-twelve">
			<a href="#contact" title="Contact Me" className="button stroke smoothscroll">Contact Me</a>
			<a href="https://www.malt.fr/profile/valentinbourgoin1" title="Hire me on Malt" target="_blank" className="button button-primary">Hire me on Malt</a>
		</div>   		
	</div>
	</section>      
	)

export default About;