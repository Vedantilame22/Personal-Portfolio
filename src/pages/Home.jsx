import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience'; // New component
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      
      <main className="w-full max-w-6xl px-6 flex flex-col">
        {/* About Section */}
        <section id="about" className="min-h-[80vh] flex items-center">
          <Hero />
        </section>

        {/* Experience Section - New */}
        <section id="experience" className="py-24 border-t border-black/5 dark:border-white/5">
          <Experience />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-black/5 dark:border-white/5">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-black/5 dark:border-white/5">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;