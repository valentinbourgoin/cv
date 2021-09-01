import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
		<footer>
     	<div className="row">
      	<div className="col-eight tab-full">
	      	<div className="copyright">
		        	<span>{t('footer.copyright')}</span> 
		        	<span>{t('footer.design')} <a href="http://www.styleshout.com/">styleshout</a></span> 
		        	<span>{t('footer.coded')}</span>	         	
		         </div>		                  
	      	</div>

	      	<div id="go-top">
		         <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
		      </div>

      	</div>
   </footer>  
	)
}