import { useTranslation } from 'next-i18next';

export default function Contact() {
	const { t } = useTranslation('contact');

  return (
    <section id="contact">

		<div className="row section-intro">
   		<div className="col-twelve">
   			<h5>{t('title')}</h5>
   			<h1>{t('subtitle')}</h1>
   			<p className="lead">
         {t('text')}
        </p>
   		</div> 
   	</div>

   	<div className="row contact-info">
   		<div className="col-four tab-full">
   			<div className="icon">
   				<i className="icon-pin"></i>
   			</div>
   			<h5>{t('contact.col1.title')}</h5>
   			<p>
         {t('contact.col1.text')}
        </p>
   		</div>

   		<div className="col-four tab-full collapse">
   			<div className="icon">
   				<i className="icon-mail"></i>
   			</div>
   			<h5>{t('contact.col2.title')}</h5>
   			<p>
         {t('contact.col2.text')}
			  </p>
   		</div>

   		<div className="col-four tab-full">
   			<div className="icon">
   				<i className="icon-phone"></i>
   			</div>
   			<h5>{t('contact.col3.title')}</h5>
   			<p>
   				<a href="https://www.malt.fr/profile/valentinbourgoin1" target="_blank">{t('contact.col3.text')}</a>
			  </p>
   		</div>
   		
   	</div>
		
	</section>
  )
}