import React from 'react';
import { motion } from 'framer-motion';

// Defined icons array with primary colors for dynamic hover effects
const skillIcons = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', size: 'lg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', size: 'lg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', size: 'lg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396', size: 'lg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', size: 'lg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', size: 'md' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#FFFFFF', size: 'md', invertDark: true },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3', size: 'md' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E', size: 'md' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', size: 'sm' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#FFFFFF', size: 'sm', invertDark: true },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', color: '#FFFFFF', size: 'sm', invertDark: true }
];

const sizeClasses = {
  lg: 'w-24 h-24 p-5',
  md: 'w-20 h-20 p-4',
  sm: 'w-16 h-16 p-3'
};

const Skills = () => {
  return (
    <div className="w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-black mb-20 italic uppercase tracking-tighter text-center"
      >
        Core Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto px-4">
        {skillIcons.map((skill, i) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              },
              default: {
                type: 'spring',
                stiffness: 100
              }
            }}
            whileHover={{ 
              scale: 1.15,
              rotate: 5,
              boxShadow: `0 0 40px ${skill.color}40`,
              borderColor: `${skill.color}60`
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative group flex items-center justify-center rounded-[2rem] 
              border transition-colors duration-300
              bg-gray-50 dark:bg-[#111]
              border-black/5 dark:border-white/5
              ${sizeClasses[skill.size]}
            `}
          >
            <img 
              src={skill.icon} 
              alt={`${skill.name} Logo`}
              className={`
                w-full h-full object-contain transition-transform duration-500
                ${skill.invertDark ? 'dark:invert' : ''}
              `}
            />

            <span className="
              absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 
              px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest 
              bg-purple-500 text-white 
              opacity-0 group-hover:opacity-100 group-hover:bottom-[-2rem]
              transition-all duration-300 whitespace-nowrap z-10
            ">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;