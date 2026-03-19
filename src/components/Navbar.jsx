import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-xl font-black italic tracking-tighter uppercase cursor-default"
        >
          Vedant.
        </motion.span>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-purple-500/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-purple-600" />}
          </button>

          <button 
            onClick={() => window.open('https://linkedin.com/in/vedantilame22', '_blank')}
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 transition-all"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;