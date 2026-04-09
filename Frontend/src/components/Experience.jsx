import React from 'react';
import { motion } from 'framer-motion';
import { CodeXml, Terminal, Layers, Cpu, Globe, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Frontend Developer Intern",
      company: "Graphura India Pvt. Ltd.",
      companyUrl: "https://www.linkedin.com/company/graphura-india-private-limited/",
      period: "Dec 2025 - Mar 2026",
      description: "Spearheaded responsive UI implementation and SEO optimization for client-facing platforms. Optimized asset delivery reducing LCP by 30%.",
      icon: <CodeXml size={20} />,
      tags: ["React", "SEO", "Tailwind"],
      status: "COMPLETED"
    },
    {
      id: "02",
      role: "Web Development Intern",
      company: "Prodigy Infotech",
      companyUrl: "https://www.linkedin.com/company/prodigy-infotech/",
      period: "Jun 2025 - Jul 2025",
      description: "Engineered MERN stack applications, focusing on real-time data visualization and weather forecasting logic using RESTful APIs.",
      icon: <Layers size={20} />,
      tags: ["MongoDB", "Express", "Node"],
      status: "COMPLETED"
    },
    {
      id: "03",
      role: "Android Developer",
      company: "Eduskills | AICTE",
      companyUrl: "https://www.linkedin.com/company/eduskillsfoundation/",
      period: "Oct 2024 - Dec 2024",
      description: "Developed native mobile solutions with modern architectural patterns. Integrated Firebase for real-time sync and authentication.",
      icon: <Terminal size={20} />,
      tags: ["Kotlin", "Firebase", "MVVM"],
      status: "CERTIFIED"
    },
    {
      id: "04",
      role: "AI-ML Intern",
      company: "Eduskills | AICTE",
      companyUrl: "https://www.linkedin.com/company/eduskillsfoundation/",
      period: "Apr 2024 - Jun 2024",
      description: "Implemented and fine-tuned supervised learning models. Processed large datasets to extract actionable predictive insights.",
      icon: <Cpu size={20} />,
      tags: ["Python", "Scikit-learn", "AI"],
      status: "CERTIFIED"
    }
  ];

  return (
    <section className="relative w-full bg-[#0B0E14] font-sans antialiased text-[#F0F6FC] py-20 lg:py-32 overflow-hidden">
      {/* Background technical accent glow to match Skills */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3FB950]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Updated Header Section to match Skills.jsx style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-[#F0F6FC]">
              Career <span className="text-[#3FB950]">Milestones</span>
            </h2>
          </div>
          <p className="max-w-md text-[#8B949E] text-sm lg:text-lg border-l border-[#3FB950]/30 pl-6 font-medium leading-relaxed">
            Engineered for growth and technical excellence across diverse internships and professional roles.
          </p>
        </div>

        {/* Experience Grid - 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ translateY: -5 }}
              className="relative group p-8 rounded-xl bg-[#161B22]/50 border border-[#30363D] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#3FB950]/5"
            >
              {/* Animated Corner Accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-[#3FB950] transition-all duration-500 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-transparent group-hover:border-[#3FB950] transition-all duration-500 rounded-bl-xl"></div>

              {/* Background Index Number */}
              <span className="absolute top-4 right-6 text-8xl font-black text-[#30363D]/20 font-mono pointer-events-none select-none group-hover:text-[#3FB950]/10 transition-colors">
                {exp.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#3FB950] text-[#0B0E14] rounded-lg shadow-lg shadow-[#3FB950]/20">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-[#F0F6FC] uppercase tracking-tight font-mono truncate">
                      {exp.role}
                    </h3>
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 group/link"
                    >
                      <Globe size={14} className="text-[#3FB950]" />
                      <p className="text-[#3FB950] font-bold text-xs uppercase tracking-[0.2em] group-hover/link:underline decoration-[#3FB950]/50 underline-offset-4 transition-all">
                        {exp.company}
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-[#30363D] text-[#8B949E] px-3 py-1 rounded-full uppercase font-bold tracking-widest group-hover:text-[#F0F6FC] group-hover:border-[#3FB950]/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-[#8B949E] text-sm leading-relaxed border-l-2 border-[#30363D] pl-4 group-hover:border-[#3FB950] transition-colors mb-8">
                  {exp.description}
                </p>

                {/* Status Indicator & Timeline */}
                <div className="mt-8 pt-6 border-t border-[#30363D] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse"></div>
                        <span className="text-[10px] font-mono text-[#484F58] uppercase tracking-widest">{exp.status}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-bold text-[#F0F6FC]">{exp.period}</span>
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="text-[#30363D] hover:text-[#3FB950] transition-colors cursor-pointer" />
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

export default Experience;