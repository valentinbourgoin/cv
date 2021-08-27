import Head from 'next/head'

import Intro from '../components/intro';
import About from '../components/about';
import Resume from '../components/resume';
import Services from '../components/services';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Valentin Bourgoin | CTO / CPO on-demand</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Intro />
      <About />
      <Services />
      <Resume />
      <Contact />
    
    </div>
  )
}
