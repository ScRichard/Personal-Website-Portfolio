import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Particles from './Particles';

export default function Home() {
  return (
    <>
      {/* Particle system */}
      <div className="absolute top-0 w-full h-screen -z-1">
        <Particles />
      </div>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      
    </>
  );
}
