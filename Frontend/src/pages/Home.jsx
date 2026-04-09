import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0E14] text-[#F0F6FC] antialiased selection:bg-[#3FB950]/30">
      <Navbar />
      
      <main className="flex-grow">
        {/* Sections now flow naturally without forced min-height or extra outer padding */}
        <section id="about">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;