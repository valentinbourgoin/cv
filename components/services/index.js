import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation('services');

	return (
    <section id="services">

			<div className="row section-intro">
	   		<div className="col-twelve">
	   			<h5>{t('title')}</h5>
	   			<h1>{t('subtitle')}</h1>
	   			<p className="lead">{t('text')}</p>
	   		</div>   		
	   	</div>

	   	<div className="row services-content">
	   		<div className="services-list">
					<div className="service">	
						<span className="icon"><i className="fa fa-road fa-stack-1x fa-inverse"></i></span>            
						<div className="service-content">	
							<h3>{t('services.service1.title')}</h3>
							<p className="desc">
                {t('services.service1.text')}
							</p>
						</div>
					</div>

					<div className="service">	
						<span className="icon"><i className="fa fa-cogs fa-stack-1x fa-inverse"></i></span>            
						<div className="service-content">	
							<h3>{t('services.service2.title')}</h3>
							<p className="desc">
                {t('services.service2.text')}
							</p>
						</div>
					</div>

					<div className="service">	
						<span className="icon"><i className="fa fa-users fa-stack-1x fa-inverse"></i></span>            
						<div className="service-content">	
							<h3>{t('services.service3.title')}</h3>
							<p className="desc">
                {t('services.service3.text')}
							</p>
						</div>
					</div>

					<div className="service">	
						<span className="icon"><i className="fa fa-stethoscope fa-stack-1x fa-inverse"></i></span>            
						<div className="service-content">	
							<h3>{t('services.service4.title')}</h3>
							<p className="desc">
                {t('services.service4.text')}
							</p>
						</div>
					</div>

					<div className="service">	
						<span className="icon"><i className="fa fa-microphone fa-stack-1x fa-inverse"></i></span>            
						<div className="service-content">	
							<h3>{t('services.service5.title')}</h3>
							<p className="desc">
                {t('services.service5.text')}
							</p>
						</div>
					</div>

		    </div>
	   	</div>
			
		</section>
  )
}