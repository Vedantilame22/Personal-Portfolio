import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Layout, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <Layout size={20} />,
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Database size={20} />,
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertDark: true },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ]
  },
  {
    title: "DevOps & Tooling",
    icon: <Terminal size={20} />,
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertDark: true },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invertDark: true },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
        
        {/* Section Heading synchronized with Experience */}
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
           Technical Stack
          </motion.h2>
        </div>

        {/* Competency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ translateY: -5 }}
              className="relative group p-8 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Corner Accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-indigo-600 transition-all duration-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-transparent group-hover:border-indigo-600 transition-all duration-500 rounded-bl-xl"></div>

              {/* Category Background Index */}
              <span className="absolute top-4 right-6 text-7xl font-black text-slate-200 dark:text-slate-800/30 font-mono pointer-events-none select-none group-hover:text-indigo-500/10 transition-colors">
                0{idx + 1}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/20">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-50 uppercase tracking-tight font-mono">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Icons List */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 group/skill hover:border-indigo-500/50 transition-colors">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className={`w-6 h-6 object-contain transition-transform group-hover/skill:scale-110 ${skill.invertDark ? 'dark:invert' : ''}`}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status Indicator Bar */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Stack_Status: Optimized</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <ShieldCheck size={14} className="text-indigo-500" />
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

export default Skills;