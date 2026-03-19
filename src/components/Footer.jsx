import React from 'react';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="py-32 px-6 bg-gray-50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="text-5xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter"
        >
          Let's build <br /> 
          <span className="text-purple-500 dark:text-white/20">together.</span>
        </motion.h2>
        
        <div className="flex flex-col items-center gap-10">
          <a 
            href="mailto:vedantilame22@gmail.com" 
            className="group flex items-center gap-3 text-2xl md:text-4xl font-bold hover:text-purple-500 transition-all underline decoration-purple-500/30 underline-offset-12"
          >
            vedantilame22@gmail.com
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="flex gap-4">
            {[
              { icon: <Github />, url: "https://github.com/vedantilame22" },
              { icon: <Linkedin />, url: "https://linkedin.com/in/vedantilame22" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.url} 
                target="_blank" 
                className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <p>© 2026 Vedant Ilame</p>
          <p>Nagpur, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;