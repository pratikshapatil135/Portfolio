
import Hero from "./components/Hero";

import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBackground from "./components/ParticlesBackground";
import About from "./components/About";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";



const App = () => {
  return (
    <div className="snap-container relative">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-[#0b0b1f] to-black" />
      <div className="fixed top-20 left-10 w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full -z-10" />

     
       <ParticlesBackground/>
      <Hero />
   <Navbar />
   <About />
      <Experience />
      <Projects />
      <Skills />
       <SocialLinks/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;