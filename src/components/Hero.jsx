import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="pt-40 pb-20">
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-purple-500 font-mono text-xs mb-6 uppercase tracking-[0.3em] font-bold"
      >
        Software Developer & Student
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-10"
      >
        Vedant <br /> 
        <span className="text-gray-200 dark:text-white/10 transition-colors duration-500">Ilame.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium"
      >
        BTech Computer Science student at JD College Of Engineering, Nagpur. 
        Specializing in building "pixel-perfect" MERN stack applications with a focus on high-end UI/UX.
      </motion.p>
    </div>
  );
};

export default Hero;