import { useTranslation } from 'next-i18next';

export default function Intro() {
  const { t } = useTranslation('intro');

  return (
    <section id="intro">   
      <div className="intro-overlay"></div>
      <div className="intro-content">
      <div className="row">
        <div className="col-twelve">
          <h5>{t('hello')}</h5>
          <h1>{t('name')}</h1>
          <p className="intro-position">
            <span>{t('description')}</span>
          </p>
          <a className="button stroke smoothscroll" href="#about" title="">{t('more')}</a>
        </div>  
      </div>   		 		
    </div> 

    <ul className="intro-social">        
        <li><a target="_blank" href="https://www.linkedin.com/in/valentinbourgoin/"><i className="fa fa-linkedin"></i></a></li>
        <li><a target="_blank" href="https://twitter.com/valentin_"><i className="fa fa-twitter"></i></a></li>
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