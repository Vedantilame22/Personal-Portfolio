import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home = () => {
  return (
    // Removed 'items-center' to allow full-width growth
    <div className="flex flex-col w-full bg-white dark:bg-[#020617] transition-colors duration-500">
      <Navbar />
      
      {/* 1. Removed 'max-w-6xl' to unlock the width.
          2. Removed 'px-6' so content touches the edges.
          3. We handle internal padding inside the components for better control.
      */}
      <main className="w-full flex flex-col">
        
        {/* About/Hero Section - Full Height & Width */}
        <section id="about" className="w-full min-h-screen">
          <Hero />
        </section>

        {/* Experience Section - Edge to Edge */}
        <section id="experience" className="w-full border-t border-slate-200 dark:border-slate-800">
          <Experience />
        </section>

        {/* Skills Section - Edge to Edge */}
        <section id="skills" className="w-full border-t border-slate-200 dark:border-slate-800">
          <Skills />
        </section>

        {/* Projects Section - Edge to Edge */}
        <section id="projects" className="w-full border-t border-slate-200 dark:border-slate-800">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;