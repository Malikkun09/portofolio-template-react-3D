import Navigation from '../components/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Certificates from '../sections/Certificates';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
