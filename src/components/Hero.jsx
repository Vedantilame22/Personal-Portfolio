import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Github, Linkedin, ExternalLink, CodeXml } from 'lucide-react';
// Make sure to update this path if your folder structure is different
import vedantImg from '../assets/vedantilame.jpg'; 

const Hero = () => {
  const name = "VEDANT ILAME";
  const [displayText, setDisplayText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*/";
  
  // Create a motion value to track animation progress (0 to name.length)
  const animationProgress = useMotionValue(0);

  // Map the progress to style changes
  // Starts at 0.85 scale, ends at 1
  const imageScale = useTransform(animationProgress, [0, name.length], [0.85, 1]);
  // Border opacity starts at 0, ends at 1
  const borderOpacity = useTransform(animationProgress, [name.length * 0.7, name.length], [0, 1]);

  const scramble = useCallback(() => {
    // Animate the motion value from 0 to name.length over 1.5 seconds
    animate(animationProgress, name.length, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        // Update display text based on motion value progress
        setDisplayText(
          name.split("").map((char, index) => {
            if (index < latest) return name[index];
            return characters[Math.floor(Math.random() * characters.length)];
          }).join("")
        );
      }
    });
  }, [name, animationProgress]);

  useEffect(() => {
    scramble();
  }, [scramble]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 pb-10 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      
      {/* Professional Tech Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />

      {/* Container Utilizing Max Space */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-2">
          
          {/* Left Content Area */}
          <div className="flex-[1.2] order-2 lg:order-1 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-indigo-600"></div>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-bold uppercase tracking-[0.3em]">
                Frontend Architect
              </span>
            </motion.div>
            
            {/* Single Line Scramble Heading */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none mb-8 text-slate-900 dark:text-slate-50 font-mono min-h-[1em]">
              {displayText}
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }} // Starts right before scramble finishes
              className="max-w-3xl"
            >
              {/* Description */}
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-10 border-l-2 border-indigo-200 dark:border-indigo-900/50 pl-6">
                Computer Science student at <span className="text-slate-900 dark:text-white font-semibold">JD College of Engineering and Management, Nagpur</span>.
                I specialize in engineering high-performance user interfaces within the <span className="text-indigo-600 dark:text-indigo-400 font-medium">MERN Stack</span>, bridging the gap between intricate backend logic and seamless, intuitive <span className="italic">React.js</span> applications.
              </p>
              
              <div className="flex flex-wrap items-center gap-10">
                {/* Social Links */}
                <div className="flex items-center gap-6">
                  <a href="https://linkedin.com/in/vedantilame22" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-all">
                    <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">LinkedIn</span>
                  </a>
                  <a href="https://github.com/vedantilame22" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-all">
                    <Github size={22} className="group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">GitHub</span>
                  </a>
                </div>

                {/* CV Button */}
                <motion.a 
                  href="/path-to-your-cv.pdf" // Update with actual path
                  download
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-3 shadow-lg shadow-indigo-500/20 cursor-pointer transition-colors"
                >
                  <span className="text-sm font-black uppercase tracking-widest">Download CV</span>
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Image Container - SCALES WITH TEXT */}
          <div 
            className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end items-center h-full"
          >
            {/* The Outer Wrapper determines maximum possible size and aspect ratio stability */}
            <div className="relative max-w-[420px] w-full p-2" style={{ aspectRatio: '4/5' }}>
              
              {/* This motion div handles the scaling from small to large */}
              <motion.div 
                style={{ scale: imageScale }} 
                className="relative w-full h-full origin-center"
              >
                {/* STYLIZED FRAME BORDER EFFECT (SYNCHRONIZED WITH INDIGO) */}
                {/* Top-Left Corner - Opacity tied to animation progress */}
                <motion.div style={{ opacity: borderOpacity }} className="absolute -top-1 -left-1 w-20 h-20 border-t-4 border-l-4 border-indigo-600 z-20 rounded-tl-2xl"></motion.div>
                {/* Bottom-Right Corner - Opacity tied to animation progress */}
                <motion.div style={{ opacity: borderOpacity }} className="absolute -bottom-1 -right-1 w-20 h-20 border-b-4 border-r-4 border-indigo-600 z-20 rounded-br-2xl"></motion.div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 z-10 shadow-2xl shadow-indigo-500/10 group">
                  <img 
                    src={vedantImg} 
                    alt="Vedant Ilame" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Professional Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-70 dark:mix-blend-multiply" />
                  
                  {/* Dynamic Tech Tag */}
                  <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2.5 bg-slate-950/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                      <CodeXml size={18} className="text-indigo-400 animate-pulse" />
                      <span className="text-white font-mono text-xs uppercase tracking-[0.2em]">
                        {displayText.length > 5 ? "ENGINEER" : characters[Math.floor(Math.random()*4)]}
                      </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;