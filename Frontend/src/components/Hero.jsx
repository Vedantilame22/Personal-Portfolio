import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import vedantImg from '../assets/vedantilame.jpg'; 

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0B0E14] overflow-hidden font-sans antialiased text-[#F0F6FC]">
      
      {/* Background technical accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3FB950]/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      
      {/* Main Content Area - Increased vertical padding for breathability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-6">
              
              {/* Flex row container on mobile/tablet to place text and image side-by-side */}
              <div className="flex flex-row items-center justify-between gap-6 lg:block">
                <div className="space-y-6 flex-grow">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-8 h-[1px] bg-[#3FB950]"></span>
                    <span className="text-[#3FB950] font-mono text-sm sm:text-base font-bold uppercase tracking-[0.3em]">
                      Vedant Ilame
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: 0.1 
                    }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter font-sans text-[#F0F6FC]"
                  >
                    Full Stack <br />
                    <span className="relative inline-block mt-2">
                      <span className="absolute -inset-2 blur-xl bg-[#3FB950]/15 rounded-full" />
                      <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-[#3FB950] via-[#3FB950] to-[#2ea043]">
                        Developer
                      </span>
                    </span>
                  </motion.h1>
                </div>

                {/* Miniature Profile Image on mobile/tablet (side-by-side with headline) */}
                <div className="lg:hidden flex-shrink-0">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative group w-24 h-32 sm:w-32 sm:h-40"
                  >
                    <div className="absolute inset-0 border border-[#3FB950]/20 rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
                    <div className="relative w-full h-full bg-[#161B22] rounded-xl overflow-hidden border border-[#8B949E]/20 shadow-2xl">
                      <img 
                        src={vedantImg} 
                        alt="Vedant Ilame" 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl text-base sm:text-lg lg:text-xl text-[#8B949E] leading-relaxed font-normal pt-2 sm:pt-4"
              >
                Specializing in the <span className="text-[#F0F6FC]">MERN Stack</span> and 
                modern frontend architectures. I transform complex requirements into  
                <span className="text-[#F0F6FC]"> high-performance web systems</span> with 
                a focus on scalable code.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 sm:pt-6"
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1LPKRT7O-sjYHOGTK28AvRjDPsXbTaBC3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-md bg-[#3FB950] text-[#0B0E14] font-bold hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#3FB950]/10 w-full sm:w-auto"
              >
                <span className="font-sans text-xs uppercase tracking-widest">Download CV</span> 
                <Download size={18} />
              </a>

              <div className="flex gap-4">
                <SocialLink href="https://linkedin.com/in/vedantilame22" icon={<Linkedin size={20} />} />
                <SocialLink href="https://github.com/vedantilame22" icon={<Github size={20} />} />
                <SocialLink href="mailto:vedantilame22@gmail.com" icon={<Mail size={20} />} />
              </div>
            </motion.div>
          </div>

          {/* Right Content Area: Profile Image (Desktop Only) */}
          <div className="lg:col-span-5 hidden lg:flex justify-end mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group w-full max-w-[280px] sm:max-w-[340px] aspect-[340/450]"
            >
              <div className="absolute inset-0 border border-[#3FB950]/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
              <div className="relative w-full h-full bg-[#161B22] rounded-2xl overflow-hidden border border-[#8B949E]/20 shadow-2xl">
                <img 
                  src={vedantImg} 
                  alt="Vedant Ilame" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar - Separated with padding for clear visibility */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 border-t border-[#161B22]/60">
          <StatCard number={4} label="Tech Internships" />
          <StatCard number={5} label="MERN Projects" suffix="+" />
          <StatCard number={8.4} label="BTech CGPA" decimals={1} />
          <StatCard number={2} label="Certifications" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 flex items-center justify-center rounded-md bg-[#161B22] border border-[#8B949E]/20 text-[#8B949E] hover:text-[#3FB950] hover:border-[#3FB950] transition-all duration-300"
  >
    {icon}
  </a>
);

const StatCard = ({ number, label, suffix = "", decimals = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    const controls = animate(count, number, { 
      duration: 2.5, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.8 
    });
    return controls.stop;
  }, [number, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center 
                 rounded-xl sm:rounded-2xl border border-[#3FB950]/15
                 bg-[#161B22]/40 backdrop-blur-xl 
                 shadow-xl shadow-[#0B0E14]/50 
                 cursor-default select-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F6FC]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-baseline gap-1">
        <motion.span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F6FC] tracking-tighter group-hover:text-[#3FB950] transition-colors duration-300">
          {rounded}
        </motion.span>
        {suffix && <span className="text-xl sm:text-2xl font-bold text-[#3FB950]/80 group-hover:text-[#3FB950]">{suffix}</span>}
      </div>
      <p className="relative z-10 text-[9px] sm:text-[10px] lg:text-[11px] text-[#8B949E] leading-tight uppercase font-bold tracking-[0.2em] font-mono mt-2 group-hover:text-[#F0F6FC] transition-colors duration-300">
        {label}
      </p>
    </motion.div>
  );
};

export default Hero;