import Intro from '../components/intro';
import About from '../components/about';
import Resume from '../components/resume';
import Services from '../components/services';
import Contact from '../components/contact';

export default function Home() {
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
