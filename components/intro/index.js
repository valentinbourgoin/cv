export default function Intro() {
    return (
      <section id="intro">   
        <div className="intro-overlay"></div>
        <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello 👋</h5>
            <h1>I'm Valentin Bourgoin.</h1>
            <p className="intro-position">
              <span>CTPO on-demand based in Nantes, France.</span>
            </p>
            <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
          </div>  
        </div>   		 		
      </div> 

      <ul className="intro-social">        
          <li><a target="_blank" href="https://www.linkedin.com/in/valentinbourgoin/"><i className="fa fa-linkedin"></i></a></li>
          <li><a target="_blank" href="https://twitter.com/valentin_"><i className="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://instagram.com/valentinbgn"><i className="fa fa-instagram"></i></a></li>
          <li><a target="_blank" href="https://www.komoot.fr/user/984970505637">
            <img src="/images/icon-komoot.svg" alt="Komoot" />
          </a></li>
          <li><a target="_blank" href="https://www.strava.com/athletes/1999872">
            <img src="/images/icon-strava.png" alt="Strava" />
          </a></li>
          
        </ul>  	
    </section>
  );
}