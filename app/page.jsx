import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Technology from '../components/Technology/Technology';
import Solutions from '../components/Solutions/Solutions';
import Process from '../components/Process/Process';
import WhyDudez from '../components/WhyDudez/WhyDudez';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Technology />
      <Solutions />
      <Process />
      <WhyDudez />
      <About />
      <Projects />
      <CTA />
      <Contact />
    </>
  );
}
