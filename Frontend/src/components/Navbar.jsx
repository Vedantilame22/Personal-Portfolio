import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/vedant-logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reordered to match Home.jsx: About -> Skills -> Experience -> Projects
  const navLinks = [
    {  name: "About", href: "#about" },
    {  name: "Skills", href: "#skills" },
    {  name: "Experience", href: "#experience" },
    {  name: "Projects", href: "#projects" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 h-24 flex items-center ${
        scrolled 
          ? "bg-[#0B0E14]/95 backdrop-blur-md border-b border-[#3FB950]/20 shadow-2xl" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="relative p-2 border border-[#3FB950]/20 rounded-xl bg-[#161B22]/80 group transition-all duration-500 hover:border-[#3FB950]/50 cursor-pointer">
            <img 
              src={logoImg} 
              alt="Vedant Logo" 
              className="h-10 w-auto object-contain brightness-110 contrast-125"
            />
            <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#3FB950] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#3FB950] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -3, backgroundColor: "rgba(63, 185, 80, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 rounded-lg bg-[#161B22] border border-[#30363D] transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              {/* link.id is now correctly mapped from the array */}
              <span className="text-[#3FB950] font-mono text-xs font-black">{link.id}</span>
              <span className="text-[#F0F6FC] font-mono text-xs uppercase tracking-[0.2em] font-bold group-hover:text-[#3FB950] transition-colors">
                {link.name}
              </span>
            </motion.a>
          ))}

          {/* Standout Connect Button */}
          <motion.a
            href="https://linkedin.com/in/vedantilame22"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 185, 80, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-8 py-3 rounded-lg bg-[#3FB950] border border-[#3FB950] text-[#0B0E14] font-mono text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all duration-300 flex items-center shadow-lg shadow-[#3FB950]/20"
          >
            Connect
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#3FB950] p-3 hover:bg-[#3FB950]/10 rounded-xl transition-all">
          <div className={`w-8 h-0.5 bg-current mb-2 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-current mb-2 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-24 right-6 w-[calc(100%-48px)] max-w-sm bg-[#0B0E14]/98 backdrop-blur-3xl border border-[#3FB950]/30 rounded-2xl shadow-2xl overflow-hidden p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="w-full flex items-center justify-between px-6 py-5 rounded-xl bg-[#161B22] border border-[#30363D] text-[#F0F6FC] text-xs font-mono tracking-widest uppercase active:bg-[#3FB950]/10"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <span className="text-[#3FB950]">{link.id}</span>
                </a>
              ))}
              <a 
                href="https://linkedin.com/in/vedantilame22"
                target="_blank"
                className="w-full py-5 rounded-xl bg-[#3FB950] text-[#0B0E14] text-center font-mono text-xs font-black uppercase tracking-widest shadow-xl shadow-[#3FB950]/20"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;