import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Terminal } from 'lucide-react';

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
    <section className="relative w-full bg-[#0B0E14] overflow-hidden font-sans antialiased">
      {/* Background technical accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3FB950]/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Container with increased bottom padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20 lg:py-32">
        
        {/* Header Section with increased margin bottom */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-[#F0F6FC]">
              Technical <span className="text-[#3FB950]">Expertise</span>
            </h2>
          </div>
          <p className="max-w-md text-[#8B949E] text-sm lg:text-lg border-l border-[#3FB950]/30 pl-6 font-medium leading-relaxed">
            Engineered for scalability, high performance, and seamless user experiences across the full development lifecycle.
          </p>
        </div>

        {/* Grid Layout with increased spacing between category columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-20">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-10">
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <div className="text-[#3FB950] opacity-80">{category.icon}</div>
                <h3 className="text-xl font-bold text-[#F0F6FC] uppercase tracking-widest font-mono">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with increased spacing between rows */}
              <div className="grid grid-cols-1 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#161B22] border border-[#8B949E]/10 group-hover:border-[#3FB950]/40 transition-all duration-300">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className={`w-7 h-7 object-contain transition-transform group-hover:scale-110 ${skill.invertDark ? 'brightness-200' : ''}`}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-end">
                        <span className="text-base font-bold text-[#F0F6FC] group-hover:text-[#3FB950] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full h-[1px] bg-[#161B22] mt-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.2, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-[#3FB950]/60 to-transparent"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;