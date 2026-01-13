import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Navbar />
      <div className="lg:ml-20">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
