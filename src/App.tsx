import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Work />
        <Resume />
        <Contact />
      </main>
    </MotionConfig>
  );
}

export default App;
