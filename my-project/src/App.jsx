import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Learning from './components/Learning';
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        <hr className="section-divider" />
        <About />

        <hr className="section-divider" />
        <Capabilities />

        <hr className="section-divider" />
        <Experience />

        <hr className="section-divider" />
        <Education />

        <hr className="section-divider" />
        <Achievements />

        <hr className="section-divider" />
        <Learning />

        <hr className="section-divider" />
        <Links />

        <Contact />
        <Footer />
      </main>
    </>
  );
}
