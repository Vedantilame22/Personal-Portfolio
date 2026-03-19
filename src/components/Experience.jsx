import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Graphura India Pvt. Ltd.",
      period: "Dec 2025 - Mar 2026",
      type: "Remote",
      description: "Focusing on modern web development and responsive UI implementation."
    },
    {
      role: "Web Development Intern",
      company: "Prodigy Infotech",
      period: "Jun 2025 - Jul 2025",
      type: "Remote",
      description: "Worked on various web projects, including a unique UI weather forecasting application."
    },
    {
      role: "Android Developer Virtual Internship",
      company: "Eduskills | AICTE",
      period: "Oct 2024 - Dec 2024",
      type: "Virtual",
      description: "Gained practical experience in Android application development frameworks."
    },
    {
      role: "AI-ML Virtual Internship",
      company: "Eduskills | AICTE",
      period: "Apr 2024 - Jun 2024",
      type: "Virtual",
      description: "Explored core concepts of Artificial Intelligence and Machine Learning."
    }
  ];

  return (
    <div className="w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-black mb-16 italic uppercase tracking-tighter"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 border-l border-black/10 dark:border-white/10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-purple-500 transition-colors" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  {exp.role}
                  <span className="text-[10px] bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-1 rounded uppercase tracking-tighter">
                    {exp.type}
                  </span>
                </h3>
                <p className="text-purple-500 font-bold text-sm mt-1 uppercase tracking-wider">
                  {exp.company}
                </p>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                {exp.period}
              </p>
            </div>
            
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm max-w-2xl leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;