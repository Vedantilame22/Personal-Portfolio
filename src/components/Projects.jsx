import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Globe, Box, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Employee Management",
      desc: "Full-stack system featuring multi-level RBAC (Admin, Head, Employee), real-time task tracking, and secure authentication flows.",
      tags: ["MERN", "Redux", "Auth", "Dashboard"],
      link: "https://github.com/Vedantilame22/Employee-Management",
      icon: <Cpu size={20} />,
      status: "STABLE_BUILD"
    },
    {
      title: "Fruits Bounty",
      desc: "Comprehensive E-commerce platform with Razorpay integration, automated order tracking, and a robust administrative control panel.",
      tags: ["React", "Node.js", "Razorpay", "MongoDB"],
      link: "https://fruit-bounty.vercel.app/",
      icon: <Box size={20} />,
      status: "LIVE_PROD"
    },
    {
      title: "G-Crown Luxury",
      desc: "A high-fidelity jewelry retail interface focused on pixel-perfect UI/UX, advanced filtering, and premium brand aesthetics.",
      tags: ["Frontend", "Figma", "Tailwind", "Design"],
      link: "https://g-crown.vercel.app/",
      icon: <Globe size={20} />,
      status: "UI_OPTIMIZED"
    },
    {
      title: "Task Management",
      desc: "Productivity engine with centralized Redux state management, real-time CRUD operations, and performance-tuned REST APIs.",
      tags: ["Redux", "Express", "API", "MERN"],
      link: "https://github.com/Vedantilame22/Task-Management-System",
      icon: <Code2 size={20} />,
      status: "ACTIVE_NODE"
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Massive Synchronized Heading */}
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
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 dark:text-slate-50 font-mono leading-none"
          >
            Projects
          </motion.h2>
        </div>

        {/* Creative Grid Layout - Matching Experience Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ translateY: -5 }}
              className="relative group p-8 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Corner Accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-indigo-600 transition-all duration-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-transparent group-hover:border-indigo-600 transition-all duration-500 rounded-bl-xl"></div>

              {/* Background Index Number */}
              <span className="absolute top-4 right-6 text-8xl font-black text-slate-200 dark:text-slate-800/30 font-mono pointer-events-none select-none group-hover:text-indigo-500/10 transition-colors">
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/20">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-50 uppercase tracking-tight font-mono truncate max-w-[200px] md:max-w-none">
                      {p.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
                      Deployment: Ready
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-indigo-200 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full uppercase font-bold tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-4 group-hover:border-indigo-500 transition-colors mb-8">
                  {p.desc}
                </p>

                {/* Status Indicator & Links */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{p.status}</span>
                    </div>
                    <div className="flex gap-4">
                      <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <ExternalLink size={18} />
                      </a>
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

export default Projects; 