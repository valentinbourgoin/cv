import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('about');

  return (
	<section id="about">  
	<div className="row section-intro">
		<div className="col-twelve">
			<h5>{t('intro.title')}</h5>
			<h1>{t('intro.subtitle')}</h1>
			<div className="intro-info">
				<img 
          src="/images/profile-pic.jpg" 
          alt="Valentin Bourgoin"
        />
        <div className="lead" dangerouslySetInnerHTML={
            {__html: t('intro.text', {interpolation: {escapeValue: false}})}
        } />
			</div>   			
		</div>   		
	</div>
	<div className="row about-content">
		<div className="col-six tab-full">
			<h3>{t('profile.title')}</h3>
			<p>{t('profile.text')}</p>
			<ul className="info-list">
				<li>
					<strong>{t('profile.name_title')}</strong>
					<span>{t('profile.name_text')}</span>
				</li>
				<li>
					<strong>{t('profile.age_title')}</strong>
					<span>{t('profile.age_text')}</span>
				</li>
				<li>
					<strong>{t('profile.location_title')}</strong>
					<span>{t('profile.location_text')}</span>
				</li>
				<li>
					<strong>{t('profile.email_title')}</strong>
					<span>{t('profile.email_text')}</span>
				</li>
			</ul>
		</div>
		<div className="col-six tab-full">
			<h3>{t('skills.title')}</h3>
			<p>{t('skills.text')}</p>
				<ul className="skill-bars">
					<li>
					<div className="progress percent90"></div>
					<strong>{t('skills.skill1')}</strong>
					</li>
					<li>
					<div className="progress percent90"></div>
					<strong>{t('skills.skill2')}</strong>
					</li>
					<li>
					<div className="progress percent90"></div>
					<strong>{t('skills.skill3')}</strong>
					</li>
					<li>
					<div className="progress percent75"></div>
					<strong>{t('skills.skill4')}</strong>
					</li>
					<li>
					<div className="progress percent60"></div>
					<strong>{t('skills.skill5')}</strong>
					</li>
				</ul>
		</div>
	</div>
	<div className="row button-section">
		<div className="col-twelve">
			<a href="#contact" title={t('buttons.contact')} className="button stroke smoothscroll">{t('buttons.contact')}</a>
			<a href="https://www.malt.fr/profile/valentinbourgoin1" title={t('buttons.hire')} target="_blank" className="button button-primary">{t('buttons.hire')}</a>
		</div>   		
	</div>
	</section>      
	)
}