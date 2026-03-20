import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CodeXml, Terminal, Layers } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Graphura India Pvt. Ltd.",
      period: "Dec 2025 - Mar 2026",
      type: "Remote",
      description: "Spearheaded responsive UI implementation and SEO optimization for client-facing web platforms. Focused on modernizing the tech stack with high-performance frontend logic.",
      icon: <CodeXml size={20} />
    },
    {
      role: "Web Development Intern",
      company: "Prodigy Infotech",
      period: "Jun 2025 - Jul 2025",
      type: "Remote",
      description: "Developed various web projects, including a specialized UI weather forecasting application, utilizing core MERN stack principles.",
      icon: <Layers size={20} />
    },
    {
      role: "Android Developer",
      company: "Eduskills | AICTE",
      period: "Oct 2024 - Dec 2024",
      type: "Virtual",
      description: "Engineered mobile solutions using modern Android development frameworks during an industry-aligned virtual internship.",
      icon: <Terminal size={20} />
    },
    {
      role: "AI-ML Intern",
      company: "Eduskills | AICTE",
      period: "Apr 2024 - Jun 2024",
      type: "Virtual",
      description: "Explored and implemented core Artificial Intelligence and Machine Learning algorithms as part of the AICTE Eduskills initiative.",
      icon: <Briefcase size={20} />
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Synchronized Heading */}
        <div className="flex flex-col mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >   
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 dark:text-slate-50 font-mono"
          >
            Experience
          </motion.h2>
        </div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ translateY: -5 }}
              className="relative group p-8 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Corner Accents (Same as Hero Image) */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-indigo-600 transition-all duration-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-transparent group-hover:border-indigo-600 transition-all duration-500 rounded-bl-xl"></div>

              {/* Background Index Number */}
              <span className="absolute top-4 right-6 text-8xl font-black text-slate-200 dark:text-slate-800/30 font-mono pointer-events-none select-none group-hover:text-indigo-500/10 transition-colors">
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/20">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-50 uppercase tracking-tight font-mono">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                   <span className="text-[10px] font-mono border border-indigo-200 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full uppercase font-bold">
                    {exp.type}
                  </span>
                  <span className="text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full uppercase font-bold tracking-widest">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-4 group-hover:border-indigo-500 transition-colors">
                  {exp.description}
                </p>

                {/* Status Indicator */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Comp_Node: Active</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <CodeXml size={14} className="text-slate-400" />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;