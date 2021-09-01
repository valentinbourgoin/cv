import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Intro from '../components/intro';
import About from '../components/about';
import Resume from '../components/resume';
import Services from '../components/services';
import Contact from '../components/contact';

const Home = () => {
  return (
    <div className="container">
      <Intro />
      <About />
      <Services />
      <Resume />
      <Contact />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, [
      'common',
      'intro', 
      'about',
      'services',
      'resume',
      'contact'
  ]),
  },
})

export default Home;