import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-black tracking-widest uppercase"
        >
          VEDANT<span className="text-red-500">.</span>
        </motion.h1>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.3em] text-gray-400">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-5 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-red-500 hover:border-red-500 transition"
          onClick={() =>
            window.open("https://linkedin.com/in/vedantilame22", "_blank")
          }
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;