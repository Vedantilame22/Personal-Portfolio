import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Task Management System",
      desc: "Engineered a robust MERN stack application featuring a RESTful API and Redux for centralized state management.",
      tags: ["React", "Node.js", "Redux", "MongoDB"]
    },
    {
      title: "Fruits Bounty",
      desc: "Full-Stack E-commerce platform with Razorpay integration and an Admin Dashboard for real-time order tracking.",
      tags: ["MERN", "Razorpay", "Vercel", "Render"]
    }
  ];

  return (
    <div className="w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-black mb-16 italic uppercase tracking-tighter"
      >
        Selected Work
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/5 p-10 rounded-[2.5rem] hover:shadow-2xl transition-all"
          >
            <div className="flex justify-between mb-8">
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <ExternalLink size={20} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">{p.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;